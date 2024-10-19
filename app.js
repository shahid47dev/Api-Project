const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
require("./config/database");

const app = express()

dotenv.config({ path: './config/.env' });

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', postRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


app.listen(process.env.PORT, () => {
    console.log(`Server Running ${process.env.PORT}`);
})

