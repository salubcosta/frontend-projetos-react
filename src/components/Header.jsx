import Navigation from './Navigation';
import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <span className="header-titulo">Atividades por <strong>Projetos</strong></span>
            <Navigation />
        </header>
    );
}

export default Header;