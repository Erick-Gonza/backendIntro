import { Router } from 'express'

const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.send({
    data: 'Aqui van los users',
  })
})

userRouter.get('/:id', (req, res) => {
  res.send({
    data: `Aqui va el user con id ${req.params.id}`,
  })
})

userRouter.post('/', (req, res) => {
  res.send({
    data: 'Aqui se crea un user',
  })
})

userRouter.put('/:id', (req, res) => {
  res.send({
    data: `Aqui se actualiza el user con id ${req.params.id}`,
  })
})

userRouter.delete('/:id', (req, res) => {
  res.send({
    data: `Aqui se elimina el user con id ${req.params.id}`,
  })
})

export { userRouter }
