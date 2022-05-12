import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import setupRoutes from './routes-config'
import dbConnection from './mongo-config'

class Server {
  private app: Application
  private port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '8000'
    this.middlewares()
    this.router()
    this.conectDB()
  }

  conectDB() {
    dbConnection()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use('/', express.static('public'))
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    this.app.use(bodyParser.json({ limit: '50mb', inflate: true }))
  }

  async router() {
    await setupRoutes(this.app)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`\nServer listenning at port ${this.port} and running app is running at http://localhost:${this.port}`)
      console.log(`Press CTRL-C to stop`)
    })
  }
}

export default Server