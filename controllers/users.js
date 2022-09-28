import { v4 as uuidv4 } from 'uuid';



let users =  [];

export const getSingleUser = (req, res) => {
    console.log(users);
    res.send(users);
}

export const createUser = (req, res) => {
    console.log('Route reached..')
    ///console.log(req.body);

    const addUser = req.body;

    //const userId = uuidv4();
   // const userWithId = {...userId, id: userId}
    users.push({...addUser, id: uuidv4()});
    res.send(`User with the username ${addUser.firstname} added to the database`)
}

export const getUsers = (req, res) => {
        //console.log(req.params);
        const { id } = req.params;
    
       const foundUser = users.find((user) => user.id === id);
       res.send(foundUser);
        //res.send(req.params);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;

    //id to delete 123
    //john 123
    //Jane 321
    users = users.filter((user) => user.id !== id);
    res.send(`user with the id ${id} deleted from the database.`)
}

export const updateUser =  (req, res) =>{
    const {id} = req.params;
    const {firstname, lastname, age} = req.body;

    const user = users.find((user) => user.id === id);
    if(firstname) {
        user.firstname = firstname;
    }
    if(lastname) {
        user.lastname = lastname;
    }
    if(age) {
        user.age = age;
    }
    res.send(`user with ${id} has been updated..`);
}