import { mergeResolvers } from 'merge-graphql-schemas'
import userResolver from './user'

const resolvers = mergeResolvers([
  userResolver,
])

export default resolvers
