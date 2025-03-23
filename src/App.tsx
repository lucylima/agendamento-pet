import sunIcon from './assets/svg/sun-icon.svg'
import logo from './assets/svg/mundo-pet-logo.svg'
import styles from './assets/scss/App.module.scss'

function App() {
  return (
    <>
      <div className="logo">
        <img src={logo} className="logo__image" />
      </div>
      <main>
        <div className={styles.header}>
          <div>
            <h2> Sua agenda </h2>
            <p>
              Aqui você pode ver todos os clientes e serviços
              agendados para hoje.
            </p>
          </div>
          <input type="date" />
        </div>
        <div className="list">
          <div className="morning">
            <div className="monring__header">
              <img src={sunIcon} />
              <span className=""> 09h-12h </span>
            </div>
            <ul className="clients__container">
              <li className="clients__item">
                <span className="item__schedule"> 09:00 </span>
                <div className="item__info">
                  <span className="pet-name"> Thor </span>{' '}
                  <span className="owner-name">
                    / Fernanda Costa{' '}
                  </span>
                </div>
                <span className="item__service"> Vacinação </span>
                <button className="item__button">
                  Remover Agendamento
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <button>Novo agendamento</button>
    </>
  )
}

export { App }
