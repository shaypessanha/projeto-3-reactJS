import Header from '../../components/Header/Header'
import image from '../../../assets/sobre.svg'
import './sobre.css'

function Sobre() {
    return (
        <>
            <Header
                image={image}
                description="tela de computador e uma mulher"
            >
                Oi, sou a Shay 🙂
            </Header>
        </>
    )
}

export default Sobre 