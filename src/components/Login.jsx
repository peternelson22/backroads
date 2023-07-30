import { useEffect } from 'react';
import { login } from '../data';
import { useGlobalContext } from '../hooks/useGlobalContext';

const Login = () => {
  const { loginInfo, setLoginInfo } = useGlobalContext();

  useEffect(() => {
    setLoginInfo({ ...loginInfo, name: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    setLoginInfo({ ...loginInfo, name: '' });
  };
  const handleLogin = () => {
    setLoginInfo(login);
  };
  return (
    <>
      {loginInfo?.name ? (
        <button onClick={handleLogout} className='btn btn-name'>
          {loginInfo?.name?.toUpperCase()}
        </button>
      ) : (
        <button onClick={handleLogin} className='btn'>
          Login
        </button>
      )}
    </>
  );
};
export default Login;
