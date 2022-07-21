import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Portfolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
            {/* <Header></Header> */}
            <Routes>
                <Route path="Portfolio" element={<Portfolio />} />
                <Route path="Comentarios" element={<Comentarios />} />
                <Route path="Sobre" element={<Sobre />} />
                <Route path="*" element={<Navigate to="Sobre" replace />} />
            </Routes>
            <Footer>
                
            </Footer>
        </BrowserRouter>
    )
}

export default ApplicationRoutes