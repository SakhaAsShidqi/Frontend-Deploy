import styles from './Footer.module.css';

function Footer() {
  // Mengembalikan elemen footer dengan class dari CSS Module
  return (
    <div className={styles.container}>
      <h1 className={styles.footer__title}>Movie App</h1>
      <p className={styles.footer__author}>Created by Sakha As Shidqi</p>
    </div>
  );
}

export default Footer;
