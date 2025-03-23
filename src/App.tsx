function App() {
  return (
    <>
      <div>
        <img />
      </div>
      <main>
        <div className="header">
          <div>
            <h2> Sua agenda </h2>
            <p>
              Aqui você pode ver todos os clientes e serviços agendados para
              hoje.
            </p>
          </div>
          <input type="date" />
        </div>
        <div className="list">
          <div className="morning">
            <div className="monring--header">
              <div> icon Manhã</div>
              <span> 09h-12h </span>
            </div>
            <ul>
              <li>
                <span> 09:00 </span>{" "}
                <div>
                  {" -"}
                  <span> Thor </span> <span>/ Fernanda Costa </span>{" "}
                </div>
                <span> Vacinação </span>
                <button> Remover Agendamento </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export { App };
