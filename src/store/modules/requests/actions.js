import getAPI from '../../../scripts/axios-api';

export default {
  async contactCoach(context, payload) {
    const request = {
      id: new Date().toISOString(),
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
<<<<<<< HEAD
      request.coachId = payload.coachId;
=======
>>>>>>> 4a30f209d8bb43514b8292a7f3736b7ca9d6f780
      context.commit('addRequest', request);
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }
};
