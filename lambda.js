'use strict'

import awsServerlessExpress from 'aws-serverless-express'
import app from './src/app'

const server = awsServerlessExpress.createServer(app)
const handler = (event, context) => awsServerlessExpress.proxy(server, event, context)

export  default handler
