function showName() {
  var firstName


  firstName = localStorage.getItem('userName')

  if (!firstName) {
firstName = prompt('Imgresá tu nombre')
localStorage.setItem('userName', firstName)

  }

  console.log('hola ' firstName)
}

showName()