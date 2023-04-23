import styles from 'components/menu/menu.module.css';
import { IconClock, IconPerson, IconMusic } from 'assets/icon';
import { useState } from 'react';

const TimeMenu = ({ mode, music, time }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  let icon;
  if (mode) {
    icon = <IconPerson />;
  } else if (music) {
    icon = <IconMusic />;
  } else if (time) {
    icon = <IconClock />;
  }
  return (
    <div className={`${styles.menu} ${isActive ? styles.active : ''}`}>
      <div className={styles.center} onClick={handleClick}>
        {icon}
      </div>
      <li style={{ '--i': 0 }}>
        <button>10</button>
      </li>
      <li style={{ '--i': 1 }}>
        <button>15</button>
      </li>
      <li style={{ '--i': 2 }}>
        <button>30</button>
      </li>
      <li style={{ '--i': 3 }}>
        <button>45</button>
      </li>
      <li style={{ '--i': 4 }}>
        <button>60</button>
      </li>
      <li style={{ '--i': 5 }}>
        <button>90</button>
      </li>
      <li style={{ '--i': 6 }}>
        <button>120</button>
      </li>
      <li style={{ '--i': 7 }}>
        <button>180</button>
      </li>
    </div>
  );
};

export default TimeMenu;
