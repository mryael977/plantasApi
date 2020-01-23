import User from '../models/UserModel.mjs'


export function index(req, res) {
    User.find({}, (err, users) => {
        if(err){
            res.status(500).send({message: 'Error al buscar usuarios'});
        }else{
            res.send(users)
        }
    });
}

export function show(req, res) {
    console.log('TODO: mostrar un usuario');
}

export function create(req, res) {
    
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password,

    });
     newUser.save( (err, user) => {
        if(err){
            res.status(500).send({message: `No se pudo crear el usuario ${err}`});
        }else{
            res.send({user});
        }
    })
}

export function update(req, res) {
    console.log('TODO: actualizar usuario');
}

export function destroy(req, res) {
    console.log('TODO: borrar usuario');
}