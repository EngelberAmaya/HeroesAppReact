import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import LoginScreen from '../components/login/LoginScreen';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    return (
        <BrowserRouter>            
            <Routes>                
                <Route path="/login" element={<LoginScreen />} />
                
                <Route path="/*" element={ 
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter