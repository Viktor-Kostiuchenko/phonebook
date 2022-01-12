import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { DebounceInput } from 'react-debounce-input';
import { selectors, actions } from 'redux/contacts';
import s from './Filter.module.scss';

export default function Filter() {
  const value = useSelector(selectors.getFilter);
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
            onChange={e => dispatch(actions.changeFilter(e.target.value))}
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
        onClick={() => dispatch(actions.changeFilter(''))}
        disabled={value === ''}
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
