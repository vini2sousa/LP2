import React from "react";


import Cadastroproduto from './views/cadastro-produto'
import Listagemproduto from './views/listagem-produto'

import Cadastroservico from './views/cadastro-servico'
import Listagemservico from './views/listagem-servico'

import {Route, Routes, BrowserRouter} from 'react-router-dom'

        function Rotas(props){
                return(
                    <BrowserRouter>
                        <Routes>
                           <Route path = '/cadastro-produto' element={<Cadastroproduto />} />
                           <Route path = '/listagem-produto' element={<Listagemproduto />} />

                           <Route path = '/cadastro-servico' element={<Cadastroservico />} />
                           <Route path = '/listagem-servico' element={<Listagemservico />} />


                        </Routes>
                    </BrowserRouter>
                )
        }

        export default Rotas;
