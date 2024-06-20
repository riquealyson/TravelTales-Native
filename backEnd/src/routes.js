const express = require("express")
const routes = express.Router();
const mongoose = require('mongoose')

const Users = mongoose.model('Users', {
    nome: String,
    username: String,
    email: String,
    senha: String
})

routes.get('/read', async (req, res) => {
    const users = await Users.find()
    return res.send(users)
})

routes.delete("/delete/:id", async (req, res) => {
    const user = await Users.findByIdAndDelete(req.params.id)
    return res.send(user)
})

routes.put("/update/:id", async (req, res) => {
    const user = await Users.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        username: req.body.username,
        email: req.body.email,
        senha: req.body.senha
    })
    return res.send(user)

})

routes.post("/create", async (req, res) => {

    try {
        const user = await Users.create(req.body)
        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message })
    }

})

module.exports = routes;