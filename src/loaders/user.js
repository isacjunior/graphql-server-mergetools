import GithubService from '../services/github'
import Dataloader from 'dataloader'

const fetchUser = async (login) => {
  const { data } = await GithubService.getUser(login)
  return data
}

const userLoader = new Dataloader(login => Promise.all(login.map(fetchUser)))

export default userLoader
