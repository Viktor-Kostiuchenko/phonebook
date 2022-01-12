import { useTranslation } from 'react-i18next';
import Icons from 'images/icons/sprite.svg';
import s from './Languages.module.scss';

export default function Languages() {
  const languages = ['en', 'uk', 'ru'];
  const { i18n } = useTranslation();

  return (
    <div className={s.langWrapper}>
      <ul className={s.list}>
        {languages.map(lang => (
          <li key={lang} className={s.item}>
            <button
              type="button"
              className={`${s.button} ${
                i18n.resolvedLanguage === lang && s.selected
              }`}
              onClick={() => i18n.changeLanguage(lang)}
            >
              <svg className={s.icon} width="25" height="25">
                <use xlinkHref={`${Icons}#${lang}`}></use>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
