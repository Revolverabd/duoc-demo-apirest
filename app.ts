import 'dotenv/config'
import Server from './src/config/server-config'

const startServer = (): void => {
  try {
    const server = new Server()
    server.listen()
  } catch (error) {
    console.log(`Can't start server ${error}`)
    console.log(`Exit (-1)`)
    process.exit(-1)
  }
}

startServer()



