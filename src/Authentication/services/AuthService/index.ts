import { ResponseObject } from '../../stores/types'

interface AuthService {
  getUsersAPI: (requestObject) => Promise<ResponseObject>
  postUsersAPI: (requestObject) => Promise<ResponseObject>
}

export default AuthService
