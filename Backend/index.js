// todo: variables globales de la aplicacion y puerto asignado

import app from './app.js';

const port = 3000;

//* señal que indica que la api esta corriendo

app.listen(port, ()=>{
console.log(`servidor corriendo en: ${port}`);
});

