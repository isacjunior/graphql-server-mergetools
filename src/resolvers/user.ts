import { userLoader } from '../loaders'
import { Data } from '../types/user'

interface Param {
  login: string,
}

export default {
  Query: {
    user: (_: any, { login }: Param): Promise<Data> => userLoader.fetchUser(login),
  },
}
