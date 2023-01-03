import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Diretoria',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Financeiro',
      corPrimaria: '#82cfffa',
      corSecundaria: 'e8f8ff'
    },
    {
      nome: 'Atendimento',
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Guias',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff509'
    }
  ]

  const [membros, setMembros] = useState([])

  const aoNovoMembroAdiciconado = (membro) => {
    console.log(membro)
    setMembros([...membros, membro])
  }
  return (
    <div className="App">

      <Banner />
      <Formulario aoMembroCadastrado={membro => aoNovoMembroAdiciconado(membro)} />
      {times.map(time => <Time nome={time.nome} />)}
      

    </div>
  );
}

export default App;
