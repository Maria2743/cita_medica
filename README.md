## DESAFÍO CITAS MÉDICAS

En este desafío validaremos nuestros conocimientos de manejo de dependencias y el uso de paquetes en Node. Para lograrlo, necesitarás aplicar tus habilidades en el uso de NPM, concretamente en el conocimiento de paquetes que no procesan datos, así como en la utilización de paquetes NPM diseñados específicamente para el procesamiento de datos.

# DESCRIPCIÓN

La clínica DENDE Spa ha tenido un problema con su software de gestión de citas y necesita urgentemente una aplicación capaz de registrar a los nuevos usuarios almacenando su nombre, apellido, sexo, hora en la que fue registrado e indispensablemente un código identificador.

Deberás crear un servidor que disponibilice una ruta para la consulta de todos los usuarios registrados. 

# REQUERIMIENTOS

1. El registro de los usuarios debe hacerse con la API Random User usando axios para consultar la data. 

```sh
Archivo -> index.js
```

2. Cada usuario registrado debe tener un campo id único generado por el paquete UUID.

```sh
Archivo -> package.json / index.js
"uuid": "^10.0.0"
```

3. Cada usuario debe tener un campo timestamp almacenando la fecha de registro obtenida y formateada por el paquete Moment. 

```sh
Archivo -> package.json / index.js
"moment": "^2.30.1",
```

4. Por cada consulta realizada al servidor, se debe devolverle al cliente una lista con los datos de todos los usuarios registrados usando Lodash para dividir el arreglo en 2 separando los usuarios por sexo. 

```sh
Archivo -> usuarios.hbs / index.js
```

5. En cada consulta también se debe imprimir por la consola del servidor la misma lista de usuarios pero con fondo blanco y color de texto azul usando el paquete Chalk.

```sh
Archivo -> package.json / index.js
"chalk": "^5.3.0",
```

6. El servidor debe ser levantado con el comando Nodemon.

```sh
Archivo -> package.json
```