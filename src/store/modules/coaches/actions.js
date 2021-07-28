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
    } catch (err) {
      console.log(err.response.status);
    }
  }
};
