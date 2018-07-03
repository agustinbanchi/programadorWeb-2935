var inputEmailNode = document.getElementById('inputEmail')

inputEmailNode.onblur = validateEmail

//funcion para validar el email
function validateEmail (event) {
  var node = event.target

 
  console.log(node.value)
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(node.value)) {
    
    //si el mail es correcto (contiene @ y .com) el contenedor se vuelve verde
    console.log('Mail Correcto', node.value)
    node.classList.remove('is-invalid')
    node.classList.add('is-valid')

//si el mail es incorrecto (no contiene @ y .com) el contenedor se vuelve rojo

  } else {
    console.log('Mail Incorrecto', node.value)
    node.classList.remove('is-valid')
    node.classList.add('is-invalid')
  }
}


