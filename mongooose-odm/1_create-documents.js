// DB connection
require('./0_database-connection')

// Model
const Dog = require('./Models/Dog.model')




// // .create()
// // argumento: objeto a crear en la BBDD
// // retorno: objeto creado en BBDD

// Dog
//     .create({ name: 'Popino', age: 15, color: 'Toffe y canelita' })
//     .then(newDog => console.log('Se ha creado un nuevo perro!', newDog))
//     .catch(err => console.log('Hubo un error...', err))






// // .create()
// // argumento: array de objetos a crear en la BBDD
// // retorno: array de objetos creados en BBDD

Dog
    .create([
        { name: 'Lassie', age: 5, color: 'Negro' },
        { name: 'Popino', age: 14, color: 'Toffe y caramelo' },
        { name: 'Salchichonio', age: 14, color: 'Toffe y caramelo' },
        { name: 'Scooby Doo', age: 1, color: 'Marroncito' },
        { name: 'Pistachin', age: 16, color: 'Toffe y caramelo' }
    ])
    .then(theNewDogs => theNewDogs.forEach(elm => console.log(`Este perro se llama ${elm.name}`)))
    .catch(err => console.log('ERROR DE MONGOOSE ---- ', err))