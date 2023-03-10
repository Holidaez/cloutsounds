import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import MainPage from './components/mainPage/landingPage';
import FilePlayer from 'react-player/file';
import Player from './components/player';
import SongUploadForm from './components/SongFeature/UploadSong';
import EditSongsForm from './components/SongFeature/EditSongs';
import SingleSongPage from './components/SongFeature/SingleSongPage';
import LogoutButton from './components/auth/LogoutButton';
import CreateComment from './components/commentsFeature/CreateComments';
import EditComment from './components/commentsFeature/EditComments';
import FourOFour from './components/FourOFour';
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Player />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/song/:songId' exact={true}>
          <SingleSongPage/>
        </ProtectedRoute>
        <ProtectedRoute path='/upload' exact={true}>
          <SongUploadForm/>
        </ProtectedRoute>
        <ProtectedRoute path='/edit/:songId' exact={true}>
          <EditSongsForm/>
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <MainPage />
        </Route>
        <ProtectedRoute path='/logout' exact={true}>
          <LogoutButton/>
        </ProtectedRoute>
        <ProtectedRoute path='/comment/add/:songId' exact={true}>
          <CreateComment />
        </ProtectedRoute>
        <ProtectedRoute path='/comment/edit/:commentId' exact={true}>
          <EditComment />
        </ProtectedRoute>
        <Route path='*'>
          <FourOFour/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
