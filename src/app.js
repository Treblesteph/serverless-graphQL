'use strict'

import express from 'express'
import body_parser from 'body-parser'
import expressGraphQL from 'express-graphql'

import GraphQLSchema from './graphql/schema'

const app = express()
app.use( body_parser.json({ limit: '50mb' }) )
app.use(
	'/',
	expressGraphQL( () => {
		return {
			graphiql: true,
			schema: GraphQLSchema,
		}
	})
)

module.exports = app
