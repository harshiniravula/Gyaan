import authStore from '../../Authentication/stores'
import GyaanFixture from '../services/GyaanService/GyaanFixture'
import GyaanStore from './GyaanStore/index'

const gyaanFixture = new GyaanFixture()

const gyaanStore = new GyaanStore(gyaanFixture, authStore)

export default { gyaanStore }
