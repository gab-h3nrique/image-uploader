import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react';

import Router from 'next/router';

import LoginForm from '../components/LoginForm';
import Api from '../lib/api';

const Home: NextPage = () => {
 
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [button, setButton] = useState(false);
  const [message, setMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false)


  const login = async() => {
    setLoading(true)
    let data = await Api.auth('/api/login', {email, password});
    console.log(data)
    if(data.accessToken) {
      Router.push('/app/');
    } else {
      setMessage(data.message);
    }
    setLoading(false)
  }

  useEffect(() => {
    if(email && password) {
      setButton(true)
    } else {
      setButton(false)
    }
  },[email, password])

return (
  <>
    <LoginForm user={ {setName, setEmail, setPassword, message, button, loading, login} } />
  </>
)
}

export default Home