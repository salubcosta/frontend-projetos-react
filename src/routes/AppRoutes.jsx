// AppRoutes.jsx
// Define todas as rotas da aplicação em um único lugar.
// Recebe categorias, projetos, atividades e handlers vindos do App.js

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Categorias     from '../pages/Categorias';

const AppRoutes = ( { categorias, projetos, atividades, handlers }) => {
    return (
        <Routes>
            <Route 
                path='/'
                element={
                    <Home
                        categorias={categorias}
                        projetos={projetos}
                        atividades={atividades}
                    />
                }
            />

            <Route
                path="/categorias"
                element={
                <Categorias
                    categorias={categorias}
                    projetos={projetos}
                    onAdicionar={handlers.adicionarCategoria}
                    onEditar={handlers.editarCategoria}
                    onExcluir={handlers.excluirCategoria}
                />
                }
            />
        </Routes>
    );
}

export default AppRoutes;