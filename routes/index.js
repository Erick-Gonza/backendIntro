import { Router } from 'express'
import { taskRouter } from './tasks.js'
import { userRouter } from './user.js'
import { categoryRouter } from './category.js'

const routes = Router()

routes.use('/tasks', taskRouter)
routes.use('/user', userRouter)
routes.use('/category', categoryRouter)

export { routes }
