const express = require('express')
const cors = require('cors')
const routes = require('../routes/routes')

const app = express()

app.use(cors())
//informar que usaremos JSON no corpo das requisições
app.use(express.json())
app.use(routes)


  /**
   * Utils
   * npm -> instala
   * npx -> executa
   */


app.listen(3333)