import './App.css';
import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="banner">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o nome"/>
      <CampoTexto label="Cargo" placeholder="Digite o cargo"/>
      <CampoTexto label="Imagem" placeholder="Carregue a imagem"/>
      <CampoTexto />
    </div>
  );
}

export default App;
