import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { DebounceInput } from 'react-debounce-input';
import { contactsSelectors } from 'redux/contacts';
import { changeFilter } from 'redux/contacts/contacts-slice';
import s from './Filter.module.scss';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className={s.filter}>
      <label className={s.label}>
        {t('filter')}
        <div className={s.wrapper}>
          <DebounceInput
            id="filterInput"
            debounceTimeout={500}
            className={s.input}
            type="text"
            value={value}
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
          <span className={s.focusBorder}>
            <i />
          </span>
        </div>
      </label>
      <button
        id="filterBtn"
        className={s.button}
        type="button"
        onClick={() => dispatch(changeFilter(''))}
        disabled={value === ''}
        aria-label="Clear filter data"
      >
        <span className={s.buttonName}>{t('clear')}</span>
      </button>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
