import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello teste' });
});

app.post('/users', (request, response) => {
    const {name, email} = request.body;

    const user = {
        name,
        email,
    }
    
    return response.json({ message: 'Hello teste' });
});

app.listen(3333, () => {
  console.log('Server running on port 3333');
});