'use strict'

import axios from 'axios'

const PostsController = { 
	index: async args => {
		const URL = `https://www.reddit.com/r/${ args.subreddit || 'javascript' }.json`
    try {
      const response = await axios.get(URL)
      const __posts = []
      const posts = response.data.data.children
      posts.map(post => {
        post.data.content = post.data.selftext_html
        __posts.push(post.data)
      })
      return __posts
    }
    catch (err) {
      console.warn(`Error calling reddit api: ${err}`)
    }
  }
}

export default PostsController
