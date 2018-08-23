'use strict'

import { GraphQLList, GraphQLString } from 'graphql'
import PostType from '../types/Post'
import PostResolver from '../resolvers/Post'
 

export default {
	index() {
		return {
			type: new GraphQLList(PostType),
			description: 'This will return all the posts we find in the given subreddit.',
			args: {
				subreddit: {
					type: GraphQLString,
					description: 'Please enter subreddit name',
				}
			},
			resolve(parent, args, context, info) {
        const postResolver = PostResolver.index(args)
        console.log(`postResolver: ${postResolver}`)
				return postResolver
			}
		}
	}
}
