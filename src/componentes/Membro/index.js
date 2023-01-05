import {BsTrash} from 'react-icons/bs'
import './Membro.css'

const Membro = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
    return (
        
        <div className='membro'>
            <BsTrash className='deletar' size={25} onClick={aoDeletar} />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome + " avatar"} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>

    )
}

export default Membro