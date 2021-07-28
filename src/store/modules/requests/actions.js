import getAPI from '../../../scripts/axios-api';

export default {
  async contactCoach(context, payload) {
    const request = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
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
      context.commit('addRequest', request);
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }
};
