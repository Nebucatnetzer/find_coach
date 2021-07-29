import getAuth from '../../../scripts/axios-auth';

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url = 'accounts:signInWithPassword';
    if (mode === 'signup') {
      url = 'accounts:signUp';
    }
    try {
      const response = await getAuth.post(url, {
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
