import { mergeResolvers } from 'merge-graphql-schemas'
import postResolver from './post'

const resolvers = mergeResolvers([
  postResolver,
])

export default resolvers
