import { MemoryRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "../../../components/login/LoginScreen";
import {mount} from 'enzyme'
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Pruebas en el <LoginScreen />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logger: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
      
    });
    
    test('Debe de realizar el dispatch y la navegación', () => {

        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
      
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Engelber Amaya'
            }
        });
        
        expect(mockNavigate).toHaveBeenCalledWith('/marvel', {replace: true});
        
        localStorage.setItem('lastPath', '/dc');
        
        handleClick();
        
        expect(mockNavigate).toHaveBeenCalledWith('/dc', {replace: true});

    });    
  
})
