import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupLoginSchema } from 'helpers/yup-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Icons from 'images/icons/sprite.svg';
import s from './LoginView.module.scss';

export default function LoginView() {
  const [passwordShown, setPasswordShown] = useState(false);
  const { t } = useTranslation();
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

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const emptyStr = watch('email') === '' && watch('password') === '';
  const undefinedSrt =
    watch('email') === undefined && watch('password') === undefined;

  return (
    <div className={s.container} id="loginView">
      <h2 className={s.formTitle} id="logTitle">
        {t('logIn')}
      </h2>
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
          <div>
            <input
              className={s.input}
              type={passwordShown ? 'text' : 'password'}
              {...register('password')}
              id="loginFormPassword"
            />
            <label className={s.label} htmlFor="loginFormPassword">
              {t('password')}
            </label>
            <p className={s.errorMsg}>{errors.password?.message}</p>
          </div>
          <button
            type="button"
            onClick={togglePassword}
            className={s.showPasswordBtn}
            aria-label="Show password"
          >
            {!passwordShown && (
              <svg width="20" height="20" className={s.icon} id="logIconShown">
                <use xlinkHref={`${Icons}#eye`} />
              </svg>
            )}
            {passwordShown && (
              <svg
                width="20"
                height="20"
                className={s.icon}
                id="logIconShownSlash"
              >
                <use xlinkHref={`${Icons}#eye-slash`} />
              </svg>
            )}
          </button>
        </div>
        <button
          id="loginFormBtn"
          className={s.button}
          type="submit"
          aria-label="Log in"
          disabled={emptyStr || undefinedSrt}
        >
          <span className={s.buttonName}>{t('in')}</span>
        </button>
        <div id="defaultDataBox">
          <p className={s.defaultData}>*{t('defaultLogin')}</p>
          <p className={s.defaultData}>
            <span>{t('email')}:</span> qaz123@mail.com
          </p>
          <p className={s.defaultData}>
            <span>{t('password')}:</span> 321zaqzaq
          </p>
        </div>
      </form>
    </div>
  );
}
