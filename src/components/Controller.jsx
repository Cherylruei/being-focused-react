import React from 'react';
import { IconPlay, IconRepeat, IconStop } from 'assets/icon';
import styles from 'components/controller.module.css';

const Controller = () => {
  return (
    <div className={styles.controller}>
      <div className={styles.iconPlay}>
        <IconPlay />
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <IconStop />
        </div>
        <div className={styles.iconRepeat}>
          <IconRepeat />
        </div>
      </div>
    </div>
  );
};

export default Controller;
