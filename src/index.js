import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const userData = []

app.post("/sign-up", (req, res) => {

    const body = req.body

    userData.push(body)

    console.log(userData)

    res.send("Sucesso!")

})

const PORT = 4000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`) )