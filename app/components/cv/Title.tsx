import styles from './cv.module.css';

interface TitleContent {
  text: string;
}

export default function Title({text}: TitleContent) {
  return (
    <div className={styles.title}>{text}</div>
  );
};