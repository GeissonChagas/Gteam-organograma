import Membro from '../Membro'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (

        < section className='time' style={css} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='membros'>
                {props.membros.map(membros => <Membro nome={membros.nome} cargo={membros.cargo} imagem={membros.imagem} />)}
            </div>
        </section >

    )
}

export default Time