'use strict'

import app from './src/app'

app.set( 'port', 1337 )

app.listen(
	app.get('port'), () => {
		const port = app.get('port')
		console.log('GraphQL Server Running at http://127.0.0.1:' + port )
	}
)
