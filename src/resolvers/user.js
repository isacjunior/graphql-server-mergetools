import GithubService from '../services/github'

const user = async (_, { login }) => {
  const { data } = await GithubService.getUser(login)
  return data
}

export default {
  Query: {
    user,
  },
}
