import express from 'express';
import { getSingleUser, createUser, getUsers, deleteUser, updateUser } from '../controllers/users.js';


const router = express.Router();

router.get('/', getSingleUser);

router.post('/', createUser);

router.get('/:id', getUsers);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router;