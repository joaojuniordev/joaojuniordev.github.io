import { 
    BrowserRouter, 
    HashRouter,
    Routes as AllRoutes, 
    Route 
} from 'react-router-dom'

import Home from './pages/Home'
import Repo from './pages/Repo'
import Curriculum from './pages/Curriculum'
import Error from './pages/Error'

const Routes = ()=>{
    return(
        // <BrowserRouter>
            <AllRoutes>
                <Route path='/' exact       element={<Home/>}/>
                <Route path='/repositorios' element={<Repo/>}/>
                <Route path='/curriculo'    element={<Curriculum/>}/>
                <Route path='*'             element={<Error/>}/>
            </AllRoutes>
        // </BrowserRouter>
    )
}

export {
    BrowserRouter,
    HashRouter,
    Routes
}