import styles from './header.module.css';


function Header():JSX.Element {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li>
              <button className={styles.buttonMenu}>
                <svg width='24' height='24' viewBox='0 0 24 24'>
                  <use xlinkHref='#menu' />
                </svg>
                <span>Меню</span>
              </button>
            </li>
            <li>
              <a href='/' className={styles.buttonMap}>
                <svg width='24' height='24' viewBox='0 0 24 24'>
                  <use xlinkHref='#map' />
                </svg>
                <span>Как проехать</span>
              </a>
            </li>
            <li>
              <a href='tel:+79111111111' className={styles.buttonPhone}>
                <svg width='24' height='24' viewBox='0 0 24 24'>
                  <use xlinkHref='#phone' />
                </svg>
                <span>8 911 111-11-11</span>
              </a>
            </li>
          </ul>
        <a href='/' className={styles.logo}>
          <img src='./img/logo.png' alt='TuoTown' width='100px' height='24px'/>
        </a>
        <ul className={styles.list}>
          <li>
            <a href='/' className={styles.buttonBasket}>
              <svg width='24' height='24' viewBox='0 0 24 24'>
                <use xlinkHref='#shop' />
              </svg>
              <span>Корзина</span>
            </a>
          </li>
          <li>
            <a href='/' className={styles.buttonMail}>
              <svg width='24' height='24' viewBox='0 0 24 24'>
                <use xlinkHref='#mail' />
              </svg>
              <span>Уведомления</span>
            </a>
          </li>
          <li>
            <a href='/' className={styles.buttonSearch}>
              <svg width='24' height='24' viewBox='0 0 24 24'>
                <use xlinkHref='#search' />
              </svg>
              <span>Поиск</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
