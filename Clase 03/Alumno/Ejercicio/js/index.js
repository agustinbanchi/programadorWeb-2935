 var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]



for (var i = 0; i < 9; i++) {
   n += i;
   mifuncion(n);
}


 switch (daysOfTheWeek) {
   case 'Lunes':
   case 'martes':
   case 'Miercoles':
   case 'Miércoles':
   case 'Jueves':
   case 'Viernes':
     console.log('es un dia hábil')
     break
   case 'Sabado':
   case 'Sábado':
   case 'Domingo':
     console.log('es fin de semana')
     break
   default:
     console.log('no es un día valido')
     break
 }