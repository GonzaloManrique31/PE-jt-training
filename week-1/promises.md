```md
# 1 Creación de una promesa: Crea una promesa que se resuelva con el mensaje "¡Promesa resuelta!" después de 2 segundos.
```

```js
let promesa = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 2000)
  );
});
console.log(promesa);
```

```md
# 2 Consumir una promesa: Consume la promesa que creaste en el ejercicio 1 usando los métodos .then() y .catch().
```

```js
promesa
  .then((promiseResult) => {
    console.log("Se ha resuelto la promesa");
  })
  .catch((error) => {
    console.log("Falló al resolverse la promesa", error);
  });
```

```md
# 3 Encadenamiento de promesas: Crea una cadena de promesas que se resuelvan una tras otra. Cada promesa debe agregar un número a un valor inicial, y la cadena completa debe sumar un total de 10 al valor inicial.
```

```js
let valorInicial = 0;

Promise.resolve(valorInicial)
  .then((suma) => {
    console.log(`${suma}`);
    return suma + 5;
  })
  .then((suma) => {
    console.log(`${suma}`);
    return suma + 4;
  })
  .then((suma) => {
    console.log(`${suma}`);
    return suma + 1;
  })
  .then((suma) => {
    console.log(`${suma}`);
  });
```

```md
# 4 Manejo de errores: Crea una promesa que se rechace con un Error. Consume la promesa y maneja el error correctamente.
```

```js
let promesa = new Promise((resolve, rejected) => {
  setTimeout(() => {
    rejected(new Error("Se ha producido un error"));
  }, 2000);
});

console.log(promesa);

promesa
  .then((promiseResult) => {
    console.log("Se ha resuelto la promesa");
  })
  .catch((error) => {
    console.log("Falló al resolverse la promesa", error);
  });
```

```md
# 5 Promesa que se resuelve inmediatamente: Crea una promesa que se resuelva inmediatamente, y consume su resultado.
```

```js
let promesa2 = Promise.resolve("Promesa resuelta");

promesa2
  .then((promiseResult) => {
    console.log("Se ha resuelto la promesa");
  })
  .catch((error) => {
    console.log("Falló al resolverse la promesa", error);
  });
```

```md
# 6 Promesa que se rechaza inmediatamente: Crea una promesa que se rechace inmediatamente, y maneja el error.
```

```js
let promesa4 = Promise.reject(new Error("Promesa rechazada"));

promesa4
  .then((promiseResult) => {
    console.log("Se ha resuelto la promesa");
  })
  .catch((error) => {
    console.log("Falló al resolverse la promesa", error);
  });
```

```md
# 7 Promesas en paralelo: Crea tres promesas que se resuelvan después de 1, 2 y 3 segundos respectivamente. Utiliza Promise.all() para esperar a que todas ellas se resuelvan.
```

```js
let promesa = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 2000)
  );
});
console.log(promesa);

let promesa2 = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 2000)
  );
});
console.log(promesa2);

let promesa3 = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 2000)
  );
});
console.log(promesa3);

Promise.all([promesa, promesa2, promesa3])
  .then((resultado) => {
    console.log("Se han resuelto las 3 promesas", resultado);
  })
  .catch((error) => {
    console.error("Ha occurrido un error", error);
  });
```

```md
# 8 Promesas en serie: Crea tres promesas similares a las del ejercicio 7, pero en lugar de resolverlas en paralelo, encadena las promesas para que se resuelvan en serie, una tras otra.
```

```js
let promesa = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 2000)
  );
});
console.log(promesa);

let promesa2 = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 2000)
  );
});
console.log(promesa2);

let promesa3 = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 2000)
  );
});
console.log(promesa3);

promesa
  .then((resultPromesa) => {
    console.log(resultPromesa);
    return promesa2;
  })
  .then((resultPromesa2) => {
    console.log(resultPromesa2);
    return promesa3;
  })
  .then((resultPromesa3) => {
    console.log(resultPromesa3);
  })
  .catch((error) => {
    console.error("Ha occurrido un error", error);
  });
```

```md
# 9 Promise.race(): Crea dos promesas, una que se resuelva después de 1 segundo y otra que se rechace después de 2 segundos. Utiliza Promise.race() y maneja tanto la resolución como el rechazo.
```

```js
let promesa = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 1000)
  );
});
console.log(promesa);

let promesa2 = new Promise((resolve, rejected) => {
  setTimeout(() => {
    rejected(new Error("Se ha producido un error"));
  }, 2000);
});
console.log(promesa2);

Promise.race([promesa, promesa2])
  .then((result) => {
    console.log("Promesa resuelta:", result);
  })
  .catch((error) => {
    console.log("Promesa2 rechazada:", error.message);
  });
```

```md
# 10 Async/await (PARA INVESTIGAR): Reescribe el ejercicio 7 utilizando async/await en lugar de .then() y .catch().
```

```js
let promesa = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 2000)
  );
});
console.log(promesa);

let promesa2 = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 2000)
  );
});
console.log(promesa2);

let promesa3 = new Promise((resolve, rejected) => {
  resolve(
    setTimeout(() => {
      console.log("¡Promesa resuelta!");
    }, 2000)
  );
});
console.log(promesa3);

async function promesas() {
  Promise.all([promesa, promesa2, promesa3])
    .then((results) => {
      console.log("Se ha resuelto las promesas", results);
    })
    .catch((error) => {
      console.error("Ha ocurrido un error", error);
    });
}
```
