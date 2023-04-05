import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#portifolio">Portfólio</a>
            <a href="#contact">Contato</a>
        </nav>
      </header>
        <div className="home-content">
            <h3>Olá, eu sou o</h3>
            <h1>Alex Rodrigues</h1>
            <h3>Eu sou um</h3>
            <p>Sejam bem vindos ao meu portifólio,  fique à vontade para visualizar os meus projetos.
                 No final da página se quiser me mandar uma mensagem, 
                 ficarei grato!</p>
        </div>
        <div className="home-img">
          
        </div> 
          
    </div>
  );
}

export default App;
