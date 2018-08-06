import GithubService from '../services/github'

export default {
  Query: {
    user: async (_, { login }) => {
      const { data } = await GithubService.getUser(login)
      return data
    }
  }
}