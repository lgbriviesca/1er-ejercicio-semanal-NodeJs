const express = require('express');
const { usersRouter } = require('./routes/userRoutes');
const { repairsRouter } = require('./routes/repairRoutes');
const { db } = require('./utils/database');
const app = express();

// Es para que convierta todos los datos a JSON, y así poderlos ver
app.use(express.json());

//Defino mi endpoint - Un router es una pieza de código (ruteador) que tiene los distintos verbos que se usarán por la app
app.use('/api/v1/users', usersRouter);

app.use('/api/v1/repairs', repairsRouter);

db.authenticate()
  .then(() => console.log('Repairs DataBase authentication succesfully'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Repairs DataBase synced'))
  .catch(err => console.log(err));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`"1er ejercicio semanal" is running on port: ${PORT}`);
});
