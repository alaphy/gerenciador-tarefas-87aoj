import type { NextPage } from 'next'
import { type } from 'os'
import { useEffect, useState } from 'react'
import { Home } from '../containers/Home'
import { Login } from '../containers/Login'

const Index: NextPage = () => {

  const [accessToken, setAcessToken] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        setAcessToken(token);
      }

    }
  }, [setAcessToken]);

  return (
    !accessToken ? <Login setAccessToken={setAcessToken} />
      : <Home setAccessToken={setAcessToken} />
  );
}

export default Index
