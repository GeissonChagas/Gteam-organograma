import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';


function App() {

  const [membros, setMembros] = useState([])

  const aoNovoMembroAdiciconado = (membro) =>{
    console.log(membro)
    setMembros([...membros, membro])
  }
  return (
    <div className="App">

      <Banner />
      <Formulario aoMembroCadastrado ={membro => aoNovoMembroAdiciconado(membro)} />

    </div>
  );
}

export default App;
