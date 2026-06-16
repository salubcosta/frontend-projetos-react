import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ dados }) => {
    const navigate = useNavigate();

    const cards = [
        {
            titulo: 'Categorias',
            descricao: 'Agrupe seus projetos por categoria',
            total: dados.categorias.length,
            rota: '/categorias'
        }, {
            titulo: 'Projetos',
            descricao: 'Gerencie projetos vinculados à categoria',
            total: dados.projetos.length,
            rota: '/projetos'
        }, {
            titulo: 'Atividades',
            descricao: 'Registre tarefas realizadas em cada projeto',
            total: dados.atividades.length,
            rota: '/atividades'
        },
    ];

    return (
        <div>
            {/* Cabeçalho da home */}
            <div className='home-header'>
                <h1 className='home-titulo'>
                    Gerenciamento de atividades por <span className='home-destaque'>Projetos</span>
                </h1>
                <p className='home-subtitulo'>Organize categorias, projetos e atividades em um só lugar.</p>
            </div>
            {/* Cards de navegação */}
            <div className='home-cards'>
                {
                    cards.map(card => (
                        <div key={card.titulo} className='card' onClick={()=> navigate(card.rota)}>
                            <h2 className='card-titulo'>{card.titulo}</h2>
                            <p className='card-total'>{card.total} {card.titulo.toLowerCase()}</p>
                            <p className='card-descricao'>{card.descricao}</p>
                            <span className='card-link'>Ver todos</span>
                        </div>
                    ))
                }
            </div>
            {console.log(dados)}
        </div>
    );
};

export default Home;