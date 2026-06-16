import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

// Importação de páginas
import Home from './pages/Home';

// Hooks
import useData from './hooks/useData';

import './App.css';

const App = () => {

    const { dados } = useData();

    return (
        <BrowserRouter>
            {/* Header vai aparecer em todas as páginas*/}
            <Header />

            <main>
                {/* Organização das páginas por rotas */}
                <Routes>
                    {/* Página inicial */}
                    <Route path="/" element={<Home dados={dados} />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;