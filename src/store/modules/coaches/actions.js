import getAPI from '../../../scripts/axios-api';

export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    try {
      await getAPI.put(`coaches/${userId}.json`, coachData);
      context.commit('registerCoach', {
        ...coachData,
        id: userId
      });
    } catch (err) {
      console.log(err.response.status);
    }
  },
  async loadCoaches(context) {
    try {
      const response = await getAPI.get('coaches.json');
      const responseData = response.data;
      const coaches = [];
      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas
        };
        coaches.push(coach);
      }
      context.commit('setCoaches', coaches);
    } catch (err) {
      console.log(err.response.status);
    }
  }
};
