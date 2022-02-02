const express = require('express')
const app = express()

require('./db/connection')

app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

const Dog = require('./models/Dog.model')

app.get('/', (req, res) => {

    Dog
        .find()
        .then(dogs => res.render('dogs-page', { dogs }))
        .catch(err => console.log(err))

})

app.listen(5005, () => console.log('LEVANTADO'))