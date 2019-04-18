import GithubService from '../services/github'
import { Data } from '../types/user'

const fetchUser = async (login: string): Promise<Data> => {
  const { data } = await GithubService.getUser(login)
  return data
}

export default {
  fetchUser,
}
