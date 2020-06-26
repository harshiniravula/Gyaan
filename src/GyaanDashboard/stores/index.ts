import GyaanFixture from '../services/GyaanService/GyaanFixture'
import GyaanStore from './GyaanStore/index'

const gyaanFixture = new GyaanFixture()

const gyaanStore = new GyaanStore(gyaanFixture)

export default { gyaanStore }
