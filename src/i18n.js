import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: 'Home',
      in: 'Log in',
      out: 'Log out',
      reg: 'Registration',
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
    },
  },
  uk: {
    translation: {
      home: 'Головна',
      in: 'Увійти',
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
      out: 'Вийти',
    },
  },
  ru: {
    translation: {
      home: 'Главная',
      reg: 'Зарегистрироваться',
      in: 'Войти',
      out: 'Выйти',
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
