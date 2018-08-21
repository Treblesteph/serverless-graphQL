'use strict'

import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql'

import PostQuery from './queries/Post'

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'This is the default root query provided by our application',
	fields: {
		posts: PostQuery.index(),
	},
})

module.exports = new GraphQLSchema({
	query: RootQuery,
})