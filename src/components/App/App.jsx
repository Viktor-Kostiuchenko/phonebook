import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ContactsView from 'views/ContactsView';
import HomeView from 'views/HomeView/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import Header from 'components/Header';
import { authOperations } from 'redux/auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/register">
            <RegisterView />
          </Route>
          <Route exact path="/login">
            <LoginView />
          </Route>
          <Route exact path="/contacts">
            <ContactsView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
