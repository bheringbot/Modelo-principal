import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import config from './config.js'
import gerarRouter from './routes/gerar.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/gerar', gerarRouter)

app.listen(config.PORT, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${config.PORT}`)
})
