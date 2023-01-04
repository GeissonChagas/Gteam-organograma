import Membro from '../Membro'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (

        < section className='time' style={css} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <Membro />
        </section >

    )
}

export default Time