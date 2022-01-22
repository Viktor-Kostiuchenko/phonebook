import Notiflix from 'notiflix';

export function notificate(contact) {
  return Notiflix.Notify.warning(`${contact} is already in contacts`);
}

export function loginError() {
  return Notiflix.Notify.warning('Login failed. Check entered data');
}

export function registerError() {
  return Notiflix.Notify.warning(
    'Registration failed. Check entered data or try to register with new data',
  );
}

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '10px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 5000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: false,
  pauseOnHover: true,
  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Quicksand',
  fontSize: '13px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade',
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic',
  fontAwesomeIconSize: '34px',
  warning: {
    background: '#ff524b',
  },
});
