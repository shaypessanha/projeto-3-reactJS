import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Portfolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../components/Menu/Menu'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="Portfolio" element={<Portfolio />} />
                <Route path="Comentarios" element={<Comentarios />} />
                <Route path="Sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes