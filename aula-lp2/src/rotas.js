import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Cadastroproduto from './views/cadastro-produto'
import Cadastroservico from './views/cadastro-servico'

    function Rotas(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/cadastro-produto' element={<Cadastroproduto />} />
                    <Route path='/cadastro-servico' element={<Cadastroservico />} />
                </Routes>

            </BrowserRouter>


        );
    }
    export default Rotas;