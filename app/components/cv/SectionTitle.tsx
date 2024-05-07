import styles from './cv.module.css';

interface Content {
  text: string;
}

export default function SectionTitle({text}: Content) {
  return (
    <div className={styles.sectionTitle}>{text}</div>
  );
};