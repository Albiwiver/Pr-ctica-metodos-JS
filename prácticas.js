////ARRAYS////


// Dado un array de números, usa map para duplicar cada número.
const numbers = [1, 2, 3, 4, 5];
// Resultado esperado: [2, 4, 6, 8, 10]

const DoubleNumbers = numbers.map(num => num * 2)

console.log(DoubleNumbers)




// Filtra los números impares de un array.
const numbers2 = [10, 15, 20, 25, 30, 35];
// Resultado esperado: [15, 25, 35]

const FilteredNumber2 = numbers2.filter(num => num % 2 !== 0)

console.log(FilteredNumber2)




// Calcula la suma de todos los números en un array.
const numbers3 = [5, 10, 15, 20];
// Resultado esperado: 50

const SumaNumbers3 = numbers3.reduce((acumulator, num) => acumulator + num, 0)

console.log(SumaNumbers3)




// Imprime cada elemento de un array en la consola.
const fruits = ['manzana', 'pera', 'plátano'];

const FruitsToo = fruits.forEach(fruit => console.log(fruit))




// Encuentra el primer número mayor a 50 en el array.
const numbers4 = [10, 20, 50, 80, 100];
// Resultado esperado: 80

const FirstNumberGreaterThan50 = numbers4.find(num => num > 50)

console.log(FirstNumberGreaterThan50)



// Verifica si al menos un número en el array es negativo.
const numbers5 = [1, 2, 3, -4, 5];
// Resultado esperado: true

const NegativeVerifiedNumber = numbers5.some(num => num < 0)

console.log(NegativeVerifiedNumber)



// Verifica si todos los elementos del array son mayores que 0.
const numbers6 = [2, 4, 6, 8];
// Resultado esperado: true

const Numbers6GreaterThan0 = numbers6.every(num => num > 0)

console.log(Numbers6GreaterThan0)



// Ordena los números de menor a mayor.
const numbers7 = [5, 3, 8, 1, 2];
// Resultado esperado: [1, 2, 3, 5, 8]

const SortedNumbers7 = numbers7.sort((a,b) => a - b)
console.log(SortedNumbers7)



// Une dos arrays en uno solo.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// Resultado esperado: [1, 2, 3, 4, 5, 6]

const BothArrays = [...array1, ...array2]
console.log(BothArrays)



// Verifica si la palabra "perro" está en el array de palabras.
const words = ['gato', 'ratón', 'perro', 'pez'];
// Resultado esperado: true

console.log(words.includes("perro"))



////STRINGS////

// Convierte un string en mayúsculas.
const text = 'hola mundo';
// Resultado esperado: 'HOLA MUNDO'

console.log(text.toUpperCase()
)


// Convierte un string en minúsculas.
const text2 = 'JavaScript Es Genial';
// Resultado esperado: 'javascript es genial'

console.log(text2.toLowerCase())



// Elimina los espacios al inicio y al final del string.
const text3 = '   Hola   ';
// Resultado esperado: 'Hola'

console.log(text3.trim())



// Divide un string en un array de palabras.
const text4 = 'Hola cómo estás';
// Resultado esperado: ['Hola', 'cómo', 'estás']

const SplitedText = text4.split(" ")

console.log(SplitedText)



// Une un array de palabras en un string con guiones.
const words2 = ['Hola', 'mundo', 'JavaScript'];
// Resultado esperado: 'Hola-mundo-JavaScript'

const JoinedWord2 = words2.join(" - ")

console.log(JoinedWord2)



// Reemplaza la palabra "mundo" por "JavaScript".
const text5 = 'Hola mundo';
// Resultado esperado: 'Hola JavaScript'

const ReplacedWord = text5.replace("mundo", "JavaScript")

console.log(ReplacedWord)



// Obtiene el primer carácter de un string.
const text6 = 'Hola';
// Resultado esperado: 'H'

const FirstCharacter = text6.charAt()
console.log(FirstCharacter)



// Encuentra la posición de la palabra "JavaScript".
const text7 = 'Me encanta JavaScript';
// Resultado esperado: 10

const IndexedWord = text7.indexOf("JavaScript")

console.log(IndexedWord)



// Extrae la palabra "JavaScript" del string.
const text8 = 'Aprender JavaScript es divertido';
// Resultado esperado: 'JavaScript'

const SlicedWord = text8.slice(9, 19)

console.log(SlicedWord)



// Extrae los primeros 4 caracteres de un string.
const text9 = 'Hola mundo';
// Resultado esperado: 'Hola'

const SubstringText9 = text9.substring(0, 4)

console.log(SubstringText9)



////OBJETOS////


// Obtiene todas las claves del objeto.
const person = { name: 'Carlos', age: 30, city: 'Madrid' };
// Resultado esperado: ['name', 'age', 'city']

const PersonKeys = Object.keys(person)

console.log(PersonKeys)



// Obtiene todos los valores del objeto.
const person2 = { name: 'Ana', age: 25, country: 'Argentina' };
// Resultado esperado: ['Ana', 25, 'Argentina']

const PersonValues = Object.values(person2)

console.log(PersonValues)



// Convierte un objeto en un array de pares clave-valor.
const car = { brand: 'Toyota', model: 'Corolla', year: 2022 };
// Resultado esperado: [['brand', 'Toyota'], ['model', 'Corolla'], ['year', 2022]]


const EntriesCar = Object.entries(car)

console.log(EntriesCar)



// Verifica si el objeto tiene la clave "age".
const user = { name: 'Juan', email: 'juan@example.com' };
// Resultado esperado: false

const OwnPropertyUser = user.hasOwnProperty("age")

console.log(OwnPropertyUser)



// Fusiona dos objetos en uno solo.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Resultado esperado: { a: 1, b: 2, c: 3, d: 4 }

const UnitedObjects = Object.assign(obj1, obj2)

console.log(UnitedObjects)



// Convierte un objeto a un string JSON.
const user2 = { id: 1, name: 'Pedro' };
// Resultado esperado: '{"id":1,"name":"Pedro"}'

const JsonSt = JSON.stringify(user2)

console.log(JsonSt)



// Convierte un string JSON a un objeto.
const jsonString = '{"id":2,"name":"María"}';
// Resultado esperado: { id: 2, name: 'María' }

const JsonObject = JSON.parse(jsonString)

console.log(JsonObject)



// Intenta modificar un objeto congelado.
const settings = { theme: 'dark', language: 'es' };
// No debería permitir modificaciones.

const FreezeObject = Object.freeze(settings)

console.log(FreezeObject)



// Sella un objeto y trata de agregar nuevas propiedades.
const profile = { username: 'dev123', role: 'admin' };
// No debería permitir agregar nuevas propiedades.

const SealedObject = Object.seal(profile)

console.log(SealedObject)



// Elimina la propiedad "age" de un objeto.
const user3 = { name: 'Luis', age: 28, country: 'Chile' };
// Resultado esperado: { name: 'Luis', country: 'Chile' }

delete user3.age

console.log(user3)

