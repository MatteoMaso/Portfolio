import styles from './cv.module.css';

export default function CVPlaceHolder({children}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.sheets}>
      {children}
    </div>
  );
};