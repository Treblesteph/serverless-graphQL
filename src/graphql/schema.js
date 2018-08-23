'use strict'

import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import PostQuery from './queries/Post'

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'This is the default root query provided by our application',
	fields: { posts: PostQuery.index() }
})

const rootQuery = new GraphQLSchema({ query: RootQuery })
export default rootQuery