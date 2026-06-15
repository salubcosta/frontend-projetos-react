import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const location = useLocation();

    const links = [
        { to: '/', label: 'Início' },
        { to: '/categorias', label: 'Categorias' },
        { to: '/projetos', label: 'Projetos' },
        { to: '/atividades', label: 'Atividades' },
    ]

    return (
        <header className="header">
            <span className="header-titulo">Atividades por <strong>Projetos</strong></span>
            <nav>
                {links.map(link => (
                    <Link
                        key={link.to}
                        to={link.to} 
                        className={location.pathname === link.to ? 'nav-link ativo': 'nav-link'}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;