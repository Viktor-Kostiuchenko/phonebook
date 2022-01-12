import { useTranslation } from 'react-i18next';
import Section from 'components/Section';
import ContactForm from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import s from './Main.module.scss';

export default function Main() {
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
