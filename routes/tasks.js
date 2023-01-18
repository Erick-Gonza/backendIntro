import { Router } from 'express'

const taskRouter = Router()

taskRouter.get('/', (req, res) => {
  res.send({
    data: 'Aqui van los tasks',
  })
})

taskRouter.get('/:id', (req, res) => {
  res.send({
    data: `Aqui va el task con id ${req.params.id}`,
  })
})

export { taskRouter }
