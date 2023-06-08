```
# 1 Declaración de variables: Declara tres variables usando var, let y const. Asigna a cada una un valor de un tipo de dato diferente.
```

```js
var saludo = "Hola";
let numero = 10;
const verdaderamente = true;
console.log(saludo, numero, verdaderamente);
```

```
# 2 Reasignación de variables: Intenta reasignar las variables declaradas en el ejercicio 1. ¿Qué sucede con cada tipo de variable?
### R: Tanto var como let puede ser reasignadas sin problema, en cambio const produce un error, ya que son de tipo lectura y el valor no puede ser alterado.

3# Alcance de las variables: Crea una función e intenta acceder a una variable let definida dentro de la función desde fuera de la función. ¿Qué sucede?

```

```js
function soyUnaFuncion() {
  let soyUnaVariableLet = "Me gomite";
}

soyUnaFuncion();

console.log(soyUnaVariableLet);
```

```
### No se puede acceder a ella desde fuera, por que let no puede ser accedida desde fuera del bloque donde está declarada. Para que funcione debería ser declarada globalmente
```

```js
let soyUnaVariableLet;
function soyUnaFuncion() {
  soyUnaVariableLet = "Me gomite";
}

soyUnaFuncion();

console.log(soyUnaVariableLet);
```

```
# 4 Alcance de las variables (parte 2): Ahora declara una variable var dentro de la función. ¿Puedes acceder a ella desde fuera de la función?
```

```js
function soyUnaFuncion() {
  var soyUnaVariableLet = "Me gomite";
}

soyUnaFuncion();

console.log(soyUnaVariableLet);
```

```
# 5 Hoisting: Declara una variable con var después de un bloque de código que intenta acceder a esa variable. ¿Qué valor se obtiene al acceder a la variable antes de su declaración?
```

```js
console.log(soyUnaVariableHosting);

var soyUnaVariableHosting = "Hosting";
```

```
### Da undefined ya que: si podemos acceder a la variable declarada, pero no al valor que se le dará.
```

```
# 6 Hoisting (parte 2): Repite el ejercicio 5, pero esta vez con una variable let. ¿Qué sucede?
```

```js
console.log(soyUnaVariableHosting);

let soyUnaVariableHosting = "Hosting";
```

```
### A diferencia del var, el let no puede ser hosteado, por eso da error
```

```
# 7 Hoisting de funciones: Declara una función después de un bloque de código que intenta llamar a esa función. ¿Se puede ejecutar la función antes de su declaración?
```

```js
soyUnaFuncion2();

function soyUnaFuncion2() {
  var soyUnaVariable = "holi";
  console.log(soyUnaVariable);
}
```

```
# 8 Tipos de datos: Declara variables y asigna a cada una un valor de un tipo de datos diferente. Luego, utiliza typeof para verificar el tipo de cada variable.
```

```js
var saludo2 = "holi";
var numeros = 23;
var verdaderamente2 = true;
var yoMero = { nombre: "Gonzalo", edad: 15 };
var razaGatos = ["blanco", "negro", "cafe", "calvo"];

console.log(typeof saludo2);
console.log(typeof numeros);
console.log(typeof verdaderamente2);
console.log(typeof yoMero);
console.log(typeof razaGatos);
```

```
# 9 Conversión de tipos: Declara una variable con un número como una cadena (por ejemplo, "123"). Luego, intenta convertirlo en un número usando el objeto Number.
```

```js
var numeroQueNoEsNumero = "123";
console.log(numeroQueNoEsNumero);
console.log(typeof numeroQueNoEsNumero);
```

```js
var numeroQueSiEsNumero = Number(numeroQueNoEsNumero);
console.log(numeroQueSiEsNumero);
console.log(typeof numeroQueSiEsNumero);
```

```
# 10 Objetos y arrays: Declara una variable como un objeto con algunas propiedades y un array con algunos elementos. Luego, intenta agregar, modificar y eliminar propiedades y elementos.
```

```js
//Objeto
var yoMero = { nombre: "Gonzalo", edad: 15, sexo: "Dudoso", ciudad: "Merida" };
console.log(yoMero);
```

```
//agregar
yoMero.trabajo = "PA road to PE chiquito";

//modificar
yoMero.edad = 16;


//eliminar
delete yoMero.sexo;

console.log(yoMero)
```

```js
//Array
var razaGatos2 = ["negro", "blanco", "plateado", "cafe", "bicolor"];
console.log(razaGatos2);
```

```js
//agregar
razaGatos2.push("calvo");

//modificar
razaGatos2[1] = "garfield";

//eliminar cafe
razaGatos2.splice(3, 1);

console.log(razaGatos2);
```
