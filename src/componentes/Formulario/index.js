import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'


const Formulario = () => {

    const times = [
        'Diretoria',
        'Financeiro',
        'Atendimento',
        'Guias'
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto label="Nome:" placeholder="Digite o nome" />
                <CampoTexto label="Cargo:" placeholder="Digite o cargo" />
                <CampoTexto label="Imagem:" placeholder="Carregue a imagem" />
                <ListaSuspensa label="Time:" itens={times} />
            </form>
        </section>


    )
}

export default Formulario