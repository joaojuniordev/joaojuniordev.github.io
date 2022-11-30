import { 
    BrowserRouter, 
    Routes as AllRoutes, 
    Route 
} from 'react-router-dom'

import Home from './pages/Home'
import Repo from './pages/Repo'

const Routes = ()=>{
    return(
        // <BrowserRouter>
            <AllRoutes>
                <Route path='/' exact       element={<Home/>}/>
                <Route path='/repositorios' element={<Repo/>}/>
            </AllRoutes>
        // </BrowserRouter>
    )
}

export {
    BrowserRouter,
    Routes
}