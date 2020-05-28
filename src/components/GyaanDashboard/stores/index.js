import GyaanStore from './GyaanStore/index';
import GyaanFixture from '../services/GyaanService/GyaanFixture';

const gyaanFixture = new GyaanFixture();
const gyaanStore = new GyaanStore(gyaanFixture);

export default gyaanStore;
