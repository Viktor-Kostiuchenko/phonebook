import { useForm } from 'react-hook-form';
import { yupLoginSchema } from 'helpers/yup-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import s from './LoginView.module.scss';

export default function LoginView() {
  const { t } = useTranslation();
  // const contacts = useSelector(selectors.getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(yupLoginSchema) });

  const onSubmitHandler = ({ email, password }) => {
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const emtyStr = watch('email') === '' && watch('password') === '';
  const undefinedSrt =
    watch('email') === undefined && watch('password') === undefined;

  return (
    <div className={s.container}>
      <h2 className={s.formTitle}>{t('logIn')}</h2>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        autoComplete="off"
        id="loginForm"
        className={s.loginForm}
      >
        <div className={s.inputBox}>
          <input
            className={s.input}
            type="email"
            {...register('email')}
            id="loginFormEmail"
          />
          <label className={s.label} htmlFor="loginFormEmail">
            {t('email')}
          </label>
          <p className={s.errorMsg}>{errors.email?.message}</p>
        </div>
        <div className={s.inputBox}>
          <input
            className={s.input}
            type="password"
            {...register('password')}
            id="loginFormPassword"
          />
          <label className={s.label} htmlFor="loginFormPassword">
            {t('password')}
          </label>
          <p className={s.errorMsg}>{errors.password?.message}</p>
        </div>
        <button
          id="loginFormBtn"
          className={s.button}
          type="submit"
          disabled={emtyStr || undefinedSrt}
        >
          <span className={s.buttonName}>{t('in')}</span>
        </button>
      </form>
    </div>
  );
}
