import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Section from 'components/Section';
import ContactForm from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { contactsOperations } from 'redux/contacts';
import s from './ContactsView.module.scss';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const { t } = useTranslation();
  return (
    <main className={s.main}>
      <Section title={t('phonebook')}>
        <ContactForm />
      </Section>

      <Section title={t('contacts')}>
        <Filter />
        <ContactList />
      </Section>
    </main>
  );
}
