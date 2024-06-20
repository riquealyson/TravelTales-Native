const express = require("express")
const routes = express.Router();
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

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
        // Criptografa a senha antes de armazená-la
        const hashedPassword = await bcrypt.hash(req.body.senha, 10);
        const user = new Users({
            nome: req.body.nome,
            username: req.body.username,
            email: req.body.email,
            senha: hashedPassword
        });
        await user.save();
        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
});



routes.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    try {
        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(senha, user.senha);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = routes;