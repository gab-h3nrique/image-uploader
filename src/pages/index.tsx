import Router from 'next/router';

const Home = () => {
  if(typeof window !== 'undefined') Router.push('/app')
  return; 
}

export default Home