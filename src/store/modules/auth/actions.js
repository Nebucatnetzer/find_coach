import getAuth from '../../../scripts/axios-auth';

export default {
  async login(context, payload) {
    try {
      const response = await getAuth.post('accounts:signInWithPassword', {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      });
      const responseData = response.data;
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      });
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  },
  async signup(context, payload) {
    try {
      const response = await getAuth.post('accounts:signUp', {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      });
      const responseData = response.data;
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      });
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
  }
};
