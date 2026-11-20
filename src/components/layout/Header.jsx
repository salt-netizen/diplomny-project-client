import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import styles from './Header.module.css';

export default function Header() {
  const { user, isAuth, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate('/');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          Booking
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-label="Меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <NavLink to="/search?type=property" onClick={closeMenu}>
            Житло
          </NavLink>
          <NavLink to="/search?type=tour" onClick={closeMenu}>
            Тури
          </NavLink>

          {isAuth ? (
            <>
              <NavLink to="/account" onClick={closeMenu}>
                {user?.firstName || 'Мій кабінет'}
              </NavLink>
              <button type="button" className={styles.linkButton} onClick={handleLogout}>
                Вийти
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={closeMenu}>
                Увійти
              </NavLink>
              <NavLink to="/register" className={styles.primary} onClick={closeMenu}>
                Зареєструватися
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
