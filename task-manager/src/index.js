const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next();
//     }
// });

app.use((req, res, next) => {
    res.status(503).send('Site is currently down. Check back soon!')
})

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

const jwt = require('jsonwebtoken');

 (async () => {
    const token = jwt.sign({ _id: 'abc123'}, 'thisismysecret', { expiresIn: '7 days' });
    console.log(token);
    const data = jwt.verify(token, 'thisismysecret');
    console.log(data)
})();