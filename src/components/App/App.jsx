import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import Main from 'components/Main';
import { operations } from 'redux/contacts';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
