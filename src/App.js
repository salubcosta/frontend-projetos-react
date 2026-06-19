// App.js
// Raiz da aplicação
// Centraliza o estado global (categorias, projetos e atividades) e todas 
// as funções CRUD. Passa tudo para AppRoutes, que distribui p/ cada página.
// 
// Estrutura de dados.json:
// categorias:  [{id, nome}]
// projetos:    [{id, nome, descricao, categoria:{id, nome} }]
// atividades:  [{id, descricao, data, projeto:{id, nome} }]
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';

import dados from './data/dados.json';

import './App.css';

const App = () => {
    const [categorias,  setCategorias]  = useState([]);
    const [projetos,    setProjetos]    = useState([]);
    const [atividades,  setAtividades]  = useState([]);

    // Simula carregamento de uma API com setTimeout
    useEffect(()=>{
        setTimeout(()=>{
            setCategorias(dados.categorias);
            setProjetos(dados.projetos);
            setAtividades(dados.atividades);
        }, 300);
    }, []);

    // ###############################################################
    // CATEGORIAS 
    // ###############################################################

    const adicionarCategoria = (nome) => {
        const nova = { id: Date.now(), nome };
        setCategorias((prev) => [...prev, nova]);
    };

    const editarCategoria = (id, nome) => {
        // Atualiza a categoria
        setCategorias((prev) =>
        prev.map((c) => (c.id === id ? { ...c, nome } : c))
        );
        // Atualiza o campo categoria dentro de cada projeto que usa essa categoria
        setProjetos((prev) =>
        prev.map((p) =>
            p.categoria.id === id ? { ...p, categoria: { id, nome } } : p
        )
        );
    };

    const excluirCategoria = (id) => {
        setCategorias((prev) => prev.filter((c) => c.id !== id));
    };

    // ###############################################################
    // PROJETOS 
    // ###############################################################

    const adicionarProjeto = (nome, descricao, categoria) => {
        // categoria aqui já é o objeto { id, nome } vindo do formulário
        const novo = { id: Date.now(), nome, descricao, categoria };
        setProjetos((prev) => [...prev, novo]);
    };

    const editarProjeto = (id, nome, descricao, categoria) => {
        setProjetos((prev) =>
        prev.map((p) => (p.id === id ? { ...p, nome, descricao, categoria } : p))
        );
        // Atualiza o campo projeto dentro das atividades desse projeto
        setAtividades((prev) =>
        prev.map((a) =>
            a.projeto.id === id ? { ...a, projeto: { id, nome } } : a
        )
        );
    };

    const excluirProjeto = (id) => {
        setProjetos((prev) => prev.filter((p) => p.id !== id));
    };

    // ###############################################################
    // Agrupa os handlers em um objeto p/ passar limpo para AppRoutes
    // ###############################################################
    const handlers = {
        adicionarCategoria,
        editarCategoria,
        excluirCategoria,
        adicionarProjeto,
        editarProjeto,
        excluirProjeto
    }

    return (
        <BrowserRouter>
            <Header />
            <main>
                <AppRoutes 
                    categorias={categorias}
                    projetos={projetos}
                    atividades={atividades}
                    handlers={handlers}
                />
            </main>
        </BrowserRouter>
    );
}

export default App;