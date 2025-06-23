import express from 'express'
const router = express.Router()

router.post('/', (req, res) => {
  const { numero, mensagem } = req.body

  if (!numero || !mensagem) {
    return res.status(400).json({ erro: 'Número e mensagem são obrigatórios' })
  }

  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  res.json({ link })
})

export default router
