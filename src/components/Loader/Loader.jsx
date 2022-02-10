import { Oval } from 'react-loader-spinner';
import s from './Loader.module.scss';

export default function Loader({ mainLoader }) {
  return (
    <Oval
      wrapperClass={mainLoader ? s.mainLoader : s.loader}
      arialLabel="loading-indicator"
      color="#ff524b"
      height={mainLoader ? 100 : 30}
      width={mainLoader ? 100 : 30}
      timeout={3000}
      radius={10000}
    />
  );
}
