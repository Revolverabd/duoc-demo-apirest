import { Application } from 'express'
import { readdirSync } from 'fs'

const setupRoutes = async (app: Application) => {
  const routePath = `${process.cwd()}/src/routes/`
  for (const routeFile of readdirSync(routePath)) {
    const route = await import(`${routePath}${routeFile}`)
    app.use('/duoc/demo/v1/api', route.default)
  }
}

export default setupRoutes