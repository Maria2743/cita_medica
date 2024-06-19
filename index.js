import chalk from "chalk";
// 2. Cada usuario registrado debe tener un campo id único generado por el paquete UUID.
import { v4 as uuidv4 } from "uuid";
// 3. Cada usuario debe tener un campo timestamp almacenando la fecha de registro obtenida y formateada por el paquete Moment. 
import moment from "moment";
import _ from "lodash";
import axios from "axios";
import express from "express";
import { engine } from 'express-handlebars';


moment.locale('es');
const app = express();

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');


const users = [];

// 1. El registro de los usuarios debe hacerse con la API Random User usando axios para consultar la data. 

app.get("/", async (req, res) => {
    const response = await axios.get("https://randomuser.me/api/");
    const { gender, name: { first, last } } = response.data.results[0];

    const user = {
        gender,
        first,
        last,
        id: uuidv4(),
        timestamp: moment().format("LLL"),
    };

    // 4. Por cada consulta realizada al servidor, se debe devolverle al cliente una lista con los datos de todos los usuarios registrados usando Lodash para dividir el arreglo en 2 separando los usuarios por sexo. 

    users.push(user);
    const usersFilteredGenre = _.partition(users, (item) => item.gender === "female");
    const usersFemale = users.filter(user => user.gender === 'female');
    const usersMale = users.filter(user => user.gender === 'male');


    res.render('usuarios', { usersMale, usersFemale })

    //5. En cada consulta también se debe imprimir por la consola del servidor la misma lista de usuarios pero con fondo blanco y color de texto azul usando el paquete Chalk.


    console.log(chalk.blue.bgWhite(JSON.stringify(usersFilteredGenre, null, 2)));


});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`);
});