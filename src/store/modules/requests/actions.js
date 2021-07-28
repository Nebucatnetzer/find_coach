import getAPI from '../../../scripts/axios-api';

export default {
  async contactCoach(context, payload) {
    const request = {
      userEmail: payload.email,
      message: payload.message
    };
    try {
      const response = await getAPI.post(
        `requests/${payload.coachId}.json`,
        request
      );
      const responseData = await response.data;
      request.id = responseData.name;
      request.coachId = payload.coachId;
      context.commit('addRequest', request);
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  },
  async fetchRequests(context) {
    try {
      const coachId = context.rootGetters.userId;
      const response = await getAPI.get(`requests/${coachId}.json`);
      const responseData = await response.data;

      const requests = [];
      for (const key in responseData) {
        const request = {
          id: key,
          coachId: coachId,
          userEmail: responseData[key].userEmail,
          message: responseData[key].message
        };
        requests.push(request);
      }
      context.commit('setRequests', requests);
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }
};
