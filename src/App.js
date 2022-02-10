import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getItem } from './helper/storagehelper';
import Route from './routes';
import { SignIn } from './store/actiontypes';

function App() {
  const dispath = useDispatch();

  useEffect(() => {
  let token = getItem('token')
  if(token){
    dispath({type:SignIn,token});
  }
  }, []);

  return (
    <Route />
  );
}

export default App;
