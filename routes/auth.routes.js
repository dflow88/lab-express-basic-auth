const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const User = require('./../models/User.model')


router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

router.post('/signup', (req, res) => {
    const { username, password } = req.body

    bcryptjs
        .genSalt(10)
        .then(salt => bcryptjs.hash(password, salt))
        .then(passwordHashed => {
            User.create({ username, password: passwordHashed })
                .then(usuarioCreado => {
                    res.redirect('/userprofile')
                }) 
        })
})

router.get('/userprofile', (req, res) => {
    res.render('users/user-profile')
})

module.exports = router