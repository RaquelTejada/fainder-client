import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
// import SignupPage from '../pages/SignupPage/SignupPage'
// import LoginPage from '../pages/LoginPage/LoginPage'
// import CreateAiPage from '../pages/CreateAiPage/CreateAiPage'
// import AiListPage from '../pages/AiListPage/AiListPage'
// import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/signup' element={<SignupPage />} /> */}
            {/* <Route path='/login' element={<LoginPage />} /> */}
            {/* <Route element={<PrivateRoute />} >
                <Route path='/createAi' element={<CreateAiPage />} />
            </Route> */}
            {/* <Route path='/videogameList' element={<AiListPage />} /> */}
            <Route paht='/*' element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes