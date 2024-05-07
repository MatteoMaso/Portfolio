import styles from './cv.module.css';

interface Content {
  text: string;
}

export default function SubTitle({text}: Content) {
  return (
    <div className={styles.subtitle}>{text}</div>
  );
};