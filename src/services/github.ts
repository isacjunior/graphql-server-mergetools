import GithubAPI from './apis/github'
import { AxiosPromise } from 'axios'
import { Data } from '../types/user'

const GithubService = {
  getUser: (username: string): AxiosPromise<Data> => GithubAPI.get(`/users/${username}`),
}

export default GithubService
