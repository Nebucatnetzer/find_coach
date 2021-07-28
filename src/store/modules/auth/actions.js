import getAuth from '../../../scripts/axios-auth';

export default {
  login() {},
  async signup(context, payload) {
    try {
      const response = await getAuth.post('accounts:signUp', {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      });
      const responseData = response.data;
      console.log(responseData);
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      });
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }
};
