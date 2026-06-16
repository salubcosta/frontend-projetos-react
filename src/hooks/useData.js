// useData - hook customizado que gerencia todos os dados da aplicação
// Simula leitura de uma API usando um arquivo JSON local

import { useState, useEffect } from 'react';
import dadosJSON from '../data/dados.json';

const useData = () => {
    const [dados, setDados] = useState({
        categorias: [],
        projetos: [],
        atividades: []
    });
    const [loading, setLoading] = useState(true);

    // useEffect roda uma vez ao montar o componente — carrega os dados do JSON
    useEffect(() => {
        setLoading(true);
        // setTimeout simula o tempo de resposta de um servidor real
        setTimeout(() => {
            setDados(dadosJSON);
            setLoading(false);
        }, 500);
  }, []);

  return { dados, loading };
}

export default useData;