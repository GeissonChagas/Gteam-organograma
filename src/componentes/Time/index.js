import Membro from '../Membro'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (

        props.membros.length > 0 ? < section className='time' style={css} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='membros'>
                {props.membros.map(membros => {
                    return <Membro corDeFundo={props.corPrimaria} key={membros.nome} nome={membros.nome} cargo={membros.cargo} imagem={membros.imagem} aoDeletar={props.aoDeletar}/>
                })}
            </div>
        </section >
            : ''

    )
}

export default Time