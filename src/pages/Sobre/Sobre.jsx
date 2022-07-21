import Header from '../../components/Header/Header'
import shayAvatar from '../../assets/shaypessanha.jpg'
import image from '../../../assets/sobre.svg'
import './sobre.css'

function Sobre() {
    return (
        <div className='sobre-page'>
            <Header
                image={image}
                description="tela de computador e uma mulher"
            >
                Sobre mim
            </Header>
            <h2>Oi, sou a Shay 🙂</h2>
            <div className='intro-div'>
                <img src={shayAvatar} alt="Avatar da Shay" />
                <p>Designer com 5 anos de experiência na área. Atualmente, atuo como UX/UI Designer na IBM para o projeto do Banco do Brasil.</p>
            </div>
        </div>
    )
}

export default Sobre 