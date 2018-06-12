<<<<<<< HEAD
var gender = prompt('Ingrese su género, male, female u other')

var age = prompt('Ingrese su edad')

var message = 'Hola, '

=======
// Pido el nombre y la edad
var gender = prompt('Ingrese su género, male, female u other')
var age = prompt('Ingrese su edad')

// Creo una variable en la cual voy a ir acumulando las partes de mi mensaje
var message = 'Hola, '

// Agrego la parte del mensaje relacionada con el género
>>>>>>> 29990fa2f6a916b5f4ee16df9901cf9460d49f5d
switch (gender) {
  case 'male':
    message = message + 'Sr. '
    break
  case 'female':
    message = message + 'Sra. '
    break
  case 'other':
    message = message + 'Sx. '
    break
  default:
    message = message + 'Género inválido '
    break
}

<<<<<<< HEAD
=======
// Agrego la parte del mensaje relacionada con la edad
>>>>>>> 29990fa2f6a916b5f4ee16df9901cf9460d49f5d
if (age < 18) {
  message = message + 'usted es menor de edad no puede ingresar'
} else if (age >= 18) {
  message = message + 'usted es mayor de edad puede ingresar'
}

<<<<<<< HEAD
=======
// Muestro el mensaje final que esta acumulado en la variable
>>>>>>> 29990fa2f6a916b5f4ee16df9901cf9460d49f5d
console.log(message)
