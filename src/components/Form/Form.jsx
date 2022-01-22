import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupContactSchema } from 'helpers/yup-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import { notificate } from 'helpers/notifications';
import s from './Form.module.scss';

export default function ContactForm() {
  const { t } = useTranslation();
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(yupContactSchema) });

  const onSubmitHandler = ({ name, number }) => {
    const nameDublicate = contacts.find(contact => contact.name === name);
    const numberDublicate = contacts.find(contact => contact.number === number);
    if (nameDublicate) {
      notificate(name);
      return;
    } else if (numberDublicate) {
      notificate(number);
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));
    reset();
  };

  const emptyStr = watch('name') === '' && watch('number') === '';
  const undefinedSrt =
    watch('name') === undefined && watch('number') === undefined;

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off" id="form">
      <div className={s.inputBox}>
        <input
          className={s.input}
          type="text"
          {...register('name')}
          id="formName"
        />
        <label className={s.label} htmlFor="formName">
          {t('name')}
        </label>
        <p className={s.errorMsg}>{errors.name?.message}</p>
      </div>
      <div className={s.inputBox}>
        <input
          className={s.input}
          type="tel"
          {...register('number')}
          id="formNumber"
        />
        <label className={s.label} htmlFor="formNumber">
          {t('number')}
        </label>
        <p className={s.errorMsg}>{errors.number?.message}</p>
      </div>
      <button
        id="formBtn"
        className={s.button}
        type="submit"
        disabled={emptyStr || undefinedSrt}
      >
        <span className={s.buttonName}>{t('add')}</span>
      </button>
    </form>
  );
}
