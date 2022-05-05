import styles from './menu.module.css';

function Menu(): JSX.Element {

  return (
    <section className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.backButton}>
          <svg width='20' height='20' viewBox='0 0 20 20'>
            <use xlinkHref='#chevron-left' />
          </svg>
          <span>Назад</span>
        </button >
        <a href='mailto:1@gmail.com' className={styles.button}>
          <svg width='24' height='19' viewBox='0 0 24 22'>
            <use xlinkHref='#mail' />
          </svg>
          <span>Напиши нам</span>
        </a>
        <a href='/' className={styles.button}>
          <svg width='20' height='20' viewBox='0 0 20 20'>
            <use xlinkHref='#search' />
          </svg>
          <span>Поиск</span>
        </a>
      </div>
      <ul className={styles.itemsTypeList}>
        <li>
          <a href='/'>Кухонные ножи TUOTOWN</a>
        </li>
        <li>
          <a href='/'>Складные ножи TUOTOWN</a>
        </li>
        <li>
          <a href='/'>Кухонные ножи QXF</a>
        </li>
        <li>
          <a href='/'>Точильные камни</a>
        </li>
        <li>
          <a href='/'>Наборы для BBQ</a>
        </li>
        <li>
          <a href='/'>Кухонные принадлежности</a>
        </li>
        <li>
          <a href='/'>Туристические товары</a>
        </li>
      </ul>
      <ul className={styles.navigationList}>
        <li>
          <a href='/'>Новости</a>
        </li>
        <li>
          <a href='/'>О компании</a>
        </li>
        <li>
          <a href='/'>Контакты</a>
        </li>
        <li>
          <a href='/'>Как проехать</a>
        </li>
      </ul>
    </section>
  )
}


export default Menu;
