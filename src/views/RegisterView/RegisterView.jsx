import { useForm } from 'react-hook-form';
import { yupRegisterSchema } from 'helpers/yup-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import s from './RegisterView.module.scss';

export default function RegisterView() {
  const { t } = useTranslation();
  // const contacts = useSelector(selectors.getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(yupRegisterSchema) });

  const onSubmitHandler = ({ email, password, name }) => {
    dispatch(authOperations.register({ email, password, name }));
    reset();
  };

  const emtyStr =
    watch('email') === '' && watch('password') === '' && watch('name') === '';
  const undefinedSrt =
    watch('email') === undefined &&
    watch('password') === undefined &&
    watch('name') === undefined;

  return (
    <div className={s.container}>
      <h2 className={s.formTitle}>{t('registrtation')}</h2>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        autoComplete="off"
        id="regForm"
        className={s.regForm}
      >
        <div className={s.inputBox}>
          <input
            className={s.input}
            type="text"
            {...register('name')}
            id="regFormName"
          />
          <label className={s.label} htmlFor="regFormName">
            {t('name')}
          </label>
        </div>
        <div className={s.inputBox}>
          <input
            className={s.input}
            type="email"
            {...register('email')}
            id="regFormEmail"
          />
          <label className={s.label} htmlFor="regFormEmail">
            {t('email')}
          </label>
          <p className={s.errorMsg}>{errors.email?.message}</p>
        </div>
        <div className={s.inputBox}>
          <input
            className={s.input}
            type="password"
            {...register('password')}
            id="regFormPassword"
          />
          <label className={s.label} htmlFor="regFormPassword">
            {t('password')}
          </label>
          <p className={s.errorMsg}>{errors.password?.message}</p>
        </div>
        <button
          id="regFormBtn"
          className={s.button}
          type="submit"
          disabled={emtyStr || undefinedSrt}
        >
          <span className={s.buttonName}>{t('reg')}</span>
        </button>
      </form>
    </div>
  );
}
