import React, { useEffect } from 'react';
import Drawer from './Components/Drawer';
import Login from './user/Login';
import ManageAcc from './user/ModifyUser';
import ViewData from './Routes/ViewData';
import Home from './Components/Home';
import MoreInfo from './Routes/MoreInfo';
import useStyles from './Styling/styling';
import AuthApi from './AuthApi';
import Cookies from 'js-cookie';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {

  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);

  const handleLogin = (data) =>{
    setAuth(true);
    Cookies.set('jwt', data);
  }

  const handleLogout = ()=>{
    Cookies.remove('jwt');
    setAuth(false);
  }

  // const handleMoreInfo = (data)=>{

  // }

  const readCookie = ()=>{
    const user = Cookies.get('jwt');
    if(user){
      setAuth(true);
    }else if(!user){
      setAuth(false);
    }
  }

  useEffect(()=>{
    readCookie();
  },[]);

  return (
    <AuthApi.Provider value={{auth, setAuth}}>
        <BrowserRouter>
          <div className={classes.root}>
              <Drawer/>
            <div className={classes.content}>
            <div className={classes.toolbar}/>
            <Switch>
              <ProtectedRoute path="/" exact component={Home} auth={auth}/>
              <ProtectedRoute path="/view" exact component={ViewData} auth={auth}/>
              <ProtectedRoute path="/more" component={MoreInfo} auth={auth}/>
              <ProtectedLogIn path="/login" component={Login} auth={auth} handleLogin={handleLogin}/>
              <ProtectedLogOut path="/edit" component={ManageAcc} auth={auth} handleLogout={handleLogout}/>
            </Switch>
          </div>
          </div>
        </BrowserRouter>
    </AuthApi.Provider>
  );
}

const ProtectedRoute = ({auth, component: Component, ...rest}) =>{
  return(
    <Route
      {...rest}
      render = {()=>auth?(
        <Component/>
      ):<Redirect
        to='/login'
      />}
    />
  );
}

const ProtectedLogIn = ({auth, handleLogin, component: Component, ...rest}) =>{
  return(
    <Route
      {...rest}
      render={(props)=>!auth? (
        <Component handleLogin={handleLogin} {...props}/>
      ):(
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      )}
    />
  );
}

const ProtectedLogOut = ({auth, handleLogout, component: Component, ...rest}) =>{
  return(
    <Route
      {...rest}
      render={(props)=>auth? (
        <Component handleLogout={handleLogout} {...props}/>
      ):(
        <Redirect
          to={{
            pathname: '/login'
          }}
        />
      )}
    />
  );
}

export default App;
