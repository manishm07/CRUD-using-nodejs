import {v4 as uuidv4 } from 'uuid';

let users = []

export const createUser = (req,res) => {
    //console.log('post router reached');
    const user = req.body;
    //const userId = uuidv4();
    //const userWithId = { ...user, id:userId }

   // const userWithId = { ...user, id:uuidv4() }

    // users.push(userWithId);
    users.push({ ...user, id: uuidv4() });
    res.send(`user with the name ${user.firstName} added to the database`);
}

export const getUsers = (req,res) => {
    //console.log(users);
    res.send(users);
    //res.send("hello");
}

export const getUser = (req,res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
    //res.send("hello");
}

export const deleteUser = (req,res) => {
    const { id }= req.params;

    users = users.filter((user) => user.id != id);
    res.send(`user with id ${id} deleted from the database`);
}

export const updateUser = (req,res) => {
    const { id }= req.params;
    const{ firstName , lastName, age } = req.body;
    const user = users.find((user) => user.id == id);
   
    if(firstName) user.firstName =firstName;
    if(lastName) user.lastName = lastName;
    if( age ) user.age = age;
    res.send(`user with id ${id} updated from the database`);
}