import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectors } from 'redux/contacts';
import s from './Stats.module.scss';

export default function Stats() {
  const { t } = useTranslation();
  const filteredContacts = useSelector(selectors.showFiltered);
  return (
    <p className={s.total}>
      {t('total')}
      <span className={s.amount}> {filteredContacts.length}</span>
    </p>
  );
}
