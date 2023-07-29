import {createSerializer} from 'enzyme-to-json';

//enzyme
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });

//enzyme-to-json
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
