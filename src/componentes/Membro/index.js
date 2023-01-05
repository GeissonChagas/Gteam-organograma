import './Membro.css'

const Membro = ({nome, imagem, cargo, corDeFundo}) => {
    return (
        <div className='membro'>
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