import React from 'react';
import { useTranslation } from 'react-i18next';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import s from './HomeView.module.scss';

const styles = {
  fadeIn1: {
    animationIterationCount: '1',
    animationDuration: '1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
  fadeIn2: {
    animationIterationCount: '1',
    animationDuration: '2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
  fadeIn3: {
    animationIterationCount: '1',
    animationDuration: '3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

export default function HomeView() {
  const { t } = useTranslation();
  return (
    <div className={s.container} id="homeView">
      <div className={s.quote}>
        <StyleRoot>
          <h2 className={s.title} style={styles.fadeIn1}>
            {t('just')}
          </h2>
        </StyleRoot>
        <StyleRoot>
          <h2 className={s.title} style={styles.fadeIn2}>
            {t('be')}
          </h2>
        </StyleRoot>
        <StyleRoot>
          <h2 className={s.title} style={styles.fadeIn3}>
            {t('closer')}
          </h2>
        </StyleRoot>
      </div>
    </div>
  );
}
