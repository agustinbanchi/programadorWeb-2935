 var result = prompt('Ingrese un dia de la semana')

 switch (result) {
   case 'lunes':
   case 'martes':
   case 'miercoles':
   case 'jueves':
   case 'viernes':
     console.log('es un dia de semana')
     break
   case 'sabado':
   case 'domingo':
     console.log('es fin de semana')
     break
   case 'Pedrió':
     console.log('Sumaste 0 puntos')
     break
   default:
     console.log('no es un día validox')
     break
 }