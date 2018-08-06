import GithubAPI from './apis/github'

const GithubService = {
  getUser: (username) => GithubAPI.request(`/users/${username}`, { method: 'GET' }),
}

export default GithubService