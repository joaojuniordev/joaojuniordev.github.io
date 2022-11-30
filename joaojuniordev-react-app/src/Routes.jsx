import { 
    BrowserRouter, 
    Routes as AllRoutes, 
    Route 
} from 'react-router-dom'

import Home from './pages/Home'

const Routes = ()=>{
    return(
        // <BrowserRouter>
            <AllRoutes>
                <Route path='/' exact element={<Home/>}/>
            </AllRoutes>
        // </BrowserRouter>
    )
}

export {
    BrowserRouter,
    Routes
}