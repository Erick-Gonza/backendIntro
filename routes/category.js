import { Router } from 'express'

const categoryRouter = Router()

categoryRouter.get('/', (req, res) => {
  res.send({
    data: 'Aqui van las categorias',
  })
})

categoryRouter.get('/:id', (req, res) => {
  res.send({
    data: `Aqui va la categoria con id ${req.params.id}`,
  })
})

categoryRouter.post('/', (req, res) => {
  res.send({
    data: 'Aqui se crea una categoria',
  })
})

categoryRouter.put('/:id', (req, res) => {
  res.send({
    data: `Aqui se actualiza la categoria con id ${req.params.id}`,
  })
})

categoryRouter.delete('/:id', (req, res) => {
  res.send({
    data: `Aqui se elimina la categoria con id ${req.params.id}`,
  })
})

export { categoryRouter }
