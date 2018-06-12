<<<<<<< HEAD
var dayOfTheWeek = prompt('Ingrese día de la semana', 'Lunes')

=======
// Le pido al usuario que ingrese un día de la semana
var dayOfTheWeek = prompt('Ingrese día de la semana', 'Lunes')

// Creo una variable para guardar el mensaje según el caso elegido por el usuario
var message

// Comparo el día ingresado por el usuario con todos los casos posibles
>>>>>>> 29990fa2f6a916b5f4ee16df9901cf9460d49f5d
switch (dayOfTheWeek) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
<<<<<<< HEAD
    console.log('Es un día habíl')
    break
  case 'Sábado':
  case 'Domingo':
    console.log('Es día de fin de semana')
    break
  default:
    console.log('Ingresaste cualquier cosa!')
    break
}
=======
    message = 'Es un día habíl'
    break
  case 'Sábado':
  case 'Domingo':
    message = 'Es día de fin de semana'
    break
  default:
    message = 'Ingresaste cualquier cosa!'
    break
}

// Muestro en consola el mensaje según el caso en el coincidió
console.log(message)
>>>>>>> 29990fa2f6a916b5f4ee16df9901cf9460d49f5d
