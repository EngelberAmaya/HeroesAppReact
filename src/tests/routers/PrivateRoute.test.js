import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { PrivateRoute } from "../../routers/PrivateRoute";
import {mount} from 'enzyme';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <h1>Private Component</h1>
}));

describe('Pruebas en el <PrivateRoute />', () => {

    test('Debe mostrar el componente si está autenticado y guardar localStorage', () => {

        const contextValue = {
            user: {
                logeed: true,
                name: 'Engelber'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.text().trim()).toBe('Private Component');
      
    });    
  
})
