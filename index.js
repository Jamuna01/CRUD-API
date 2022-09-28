import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

//middleware
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('testing..');

    res.send('Hello from home page..');
});

app.listen(PORT, () => {
    console.log(`Server Running on port: http://localhost:${PORT}`);
})