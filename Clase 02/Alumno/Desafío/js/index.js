 var result = prompt('Ingrese su genero')

 switch (result) {
   case 'mujer':
     console.log('Sra.')
     break
     case 'hombre':
     console.log('Sr.')
     break
     case 'otro':
     console.log('Sx.')

 }


  var age = prompt(result, 'Ingrese su edad')

 if (age < 18) {
   console.log(result, 'usted es menor de edad no puede ingresar')
 } else {
   console.log(result, 'usted es mayor de edad puede ingresar')
}


