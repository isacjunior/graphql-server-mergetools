import { userLoader } from '../loaders'

export default {
  Query: {
    user: (_, { login }) => userLoader.load(login),
  },
}
