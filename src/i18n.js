import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: 'Home',
      registrtation: 'Sign Up',
      logIn: 'Log in',
      in: 'Log in',
      out: 'Log out',
      email: 'Email',
      password: 'Password',
      reg: 'Sign Up',
      user: 'Welcome',
      phonebook: 'Phonebook',
      name: 'Name',
      number: 'Phone number',
      contacts: 'Contacts',
      add: 'Add contact',
      filter: 'Filter by name',
      delete: 'Delete',
      clear: 'Clear',
      total: 'Contacts:',
      just: 'Just',
      be: 'Be',
      closer: 'Closer',
      defaultLogin: 'fot the default login, use the data below',
    },
  },
  uk: {
    translation: {
      home: 'Головна',
      registrtation: 'Реєстрація',
      logIn: 'Вхід',
      in: 'Увійти',
      out: 'Вийти',
      email: 'Ел.пошта',
      password: 'Пароль',
      reg: 'Зареєструватися',
      user: 'Вітаємо',
      phonebook: 'Телефонна книга',
      name: "Ім'я",
      number: 'Номер телефону',
      contacts: 'Контакти',
      add: 'Додати контакт',
      filter: "Фільтрувати за ім'ям",
      delete: 'Видалити',
      clear: 'Очистити',
      total: 'Контакти:',
      just: 'Просто',
      be: 'Будь',
      closer: 'Ближче',
      defaultLogin: 'для входу за замовчуванням використайте дані нижче',
    },
  },
  ru: {
    translation: {
      home: 'Главная',
      registrtation: 'Регистрация',
      logIn: 'Вход',
      in: 'Войти',
      out: 'Выйти',
      email: 'Ел.почта',
      password: 'Пароль',
      reg: 'Зарегистрироваться',
      user: 'Приветствуем',
      phonebook: 'Телефонная книга',
      name: 'Имя',
      number: 'Номер телефона',
      contacts: 'Контакты',
      add: 'Добавить контакт',
      filter: 'Фильтровать по имени',
      delete: 'Удалить',
      clear: 'Очистить',
      total: 'Контакты:',
      just: 'Просто',
      be: 'Будь',
      closer: 'Ближе',
      defaultLogin: 'для входа по умолчанию используйте данные ниже',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
