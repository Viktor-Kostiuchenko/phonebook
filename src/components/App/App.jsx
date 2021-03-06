import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import Loader from 'components/Loader';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import { authOperations, authSelectors } from 'redux/auth';

const Header = loadable(() =>
  import('components/Header' /* webpackChunkName: "header"*/),
);
const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "home-view"*/),
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /* webpackChunkName: "register-view"*/),
);
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName: "login-view"*/),
);
const ContactsView = lazy(() =>
  import('views/ContactsView' /* webpackChunkName: "contacts-view"*/),
);

export default function App() {
  const theme = useSelector(authSelectors.getTheme);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch, theme]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader mainLoader={'mainLoader'} />
      ) : (
        <>
          <Header />
          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </>
  );
}
