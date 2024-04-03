import { useState } from 'react';
import { navigationData } from '../../config/navigationData';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ul className={styles.list}>
      {navigationData.map((item, index) => (
        <li key={index} className={styles.item}>
          {item.subItems ? (
            <>
              <span
                className={`${styles.link} ${
                  activeIndex === index ? styles.active : ''
                }`}
                onClick={() => handleClick(index)}
              >
                {item.label}
              </span>
              <ul
                className={`${styles.subList} ${
                  activeIndex === index ? styles.active : ''
                }`}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.subItem}>
                    <a href={subItem.href} className={styles.link}>
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <a href={item.href} className={styles.link}>
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
