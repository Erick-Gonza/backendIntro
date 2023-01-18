import { Router } from 'express'

const productRouter = Router()

productRouter.get('/', (req, res) => {
  res.send({
    data: 'Aqui van los productos',
  })
})

productRouter.get('/:id', (req, res) => {
  res.send({
    data: `Aqui va el producto con id ${req.params.id}`,
  })
})

productRouter.post('/', (req, res) => {
  res.send({
    data: 'Aqui se crea un producto',
  })
})

productRouter.put('/:id', (req, res) => {
  res.send({
    data: `Aqui se actualiza el producto con id ${req.params.id}`,
  })
})

productRouter.delete('/:id', (req, res) => {
  res.send({
    data: `Aqui se elimina el producto con id ${req.params.id}`,
  })
})

export { productRouter }
