import { Oval } from 'react-loader-spinner';
import s from './Loader.module.scss';

export default function Loader() {
  return (
    <Oval
      wrapperClass={s.loader}
      arialLabel="loading-indicator"
      color="#ff524b"
      height={30}
      width={30}
      timeout={3000}
      radius={10000}
    />
  );
}
