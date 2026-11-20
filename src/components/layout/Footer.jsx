import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <nav className={styles.links}>
          <Link to="/about">Про компанію</Link>
          <Link to="/contacts">Контакти</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/terms">Умови використання</Link>
        </nav>
        <p className={styles.copy}>© {new Date().getFullYear()} Booking</p>
      </div>
    </footer>
  );
}
