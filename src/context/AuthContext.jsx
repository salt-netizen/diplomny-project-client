import { createContext, useContext, useEffect, useState } from 'react';
import api, { getToken, setToken, removeToken } from '../api/client.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(Boolean(getToken()));

  useEffect(() => {
    if (!getToken()) return;

    api
      .get('/auth/me')
      .then((res) => setUser(res.data))
      .catch(() => removeToken())
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password, rememberMe) => {
    const res = await api.post('/auth/login', { email, password, rememberMe });
    setToken(res.data.token);
    setUser(res.data.user);
    return res.data.user;
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  const value = { user, loading, isAuth: Boolean(user), login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
