const express = require('express');
const app = express();
const usersRouter = require('./users');

app.use(express.static('public'));
app.use('/api/users', usersRouter);

app.listen(3000, () => {
  console.log(`server is on http://localhost:3000`);
});
