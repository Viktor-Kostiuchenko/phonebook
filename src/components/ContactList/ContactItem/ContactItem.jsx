import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import EdiText from 'react-editext';
import { contactsOperations } from 'redux/contacts';
import Icons from 'images/icons/sprite.svg';
import s from './ContactItem.module.scss';

export default function ContactItem({ id, name, number, onDeleteContact }) {
  const [nameValue, setNameValue] = useState(name);
  const [numberValue, setNumberValue] = useState(number);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSaveName = id => value => {
    setNameValue(value);
    dispatch(contactsOperations.changeContactName({ id, value }));
  };
  const handleSaveNumber = id => value => {
    setNumberValue(value);
    dispatch(contactsOperations.changeContactNumber({ id, value }));
  };
  return (
    <>
      <div className={s.infoWrapper}>
        <svg className={s.icon} width="25" height="25">
          <use xlinkHref={`${Icons}#drag`}></use>
        </svg>
        <ul className={s.info}>
          <li className={s.item}>
            <svg className={s.icon} width="18" height="18">
              <use xlinkHref={`${Icons}#book`}></use>
            </svg>
            <EdiText
              value={nameValue}
              validation={value => value.length > 2 && value.length < 20}
              validationMessage={'*3-20 symbols'}
              type="text"
              onSave={handleSaveName(id)}
            />
          </li>
          <li className={s.item}>
            <svg className={`${s.icon} ${s.animation}`} width="18" height="18">
              <use xlinkHref={`${Icons}#mobile`}></use>
            </svg>
            <EdiText
              value={numberValue}
              validation={value => value.length > 2 && value.length < 20}
              validationMessage={'*3-20 symbols'}
              type="text"
              onSave={handleSaveNumber(id)}
            />
          </li>
        </ul>
      </div>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={s.button}
      >
        <span className={s.topKey} />
        <p className={s.buttonText}>{t('delete')}</p>
        <span className={s.firstKey} />
        <span className={s.secondKey} />
      </button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
