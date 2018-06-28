<<<<<<< HEAD
console.log('holis funciona')

var cars = [
=======
// Datos iniciales

var oldCars = [
>>>>>>> c2f959de5b57fcf8f90dbfb8e5721a4a475c9f6f
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]

<<<<<<< HEAD
function Car (model, brand, year) {
  var id = Math.random()

  this.model = model
  this.brand = brand
  this.year = year

  this.getCarName = function () {
    var carName = 'MODELO ' + model + '  MARCA ' + brand + '  AÑO ' + year
    return carName
  }
}

// var car1 = new Car(cars[0].model, cars[0].brand, cars[0].year)
// var car2 = new Car(cars[1].model, cars[1].brand, cars[1].year)
// var car3 = new Car(cars[2].model, cars[2].brand, cars[2].year)

// console.log(car1.getCarName())
// console.log(car2.getCarName())
// console.log(car3.getCarName())

var car

var newCars = []

for (i = 0; i < cars.length; i++) {
  var car = new Car(cars[i].model, cars[i].brand, cars[i].year)

  newCars.push(car)
}

console.log(cars)
console.log(newCars)
=======
// Función constructora

function Car (_model, _brand, _year) {
  // Propiedades privadas
  var _id = Math.random()

  // Propiedades públicas
  this.model = _model
  this.brand = _brand
  this.year = _year

  // Métodos públicos
  this.getCarName = function () {
    return this.model + ' ' + this.brand + ' ' + this.year
  }
}

var oldCar

var newCar
var newCars = []

// newCar = new Car('Twing', 'Renault', 2000)

// console.log(newCar.getCarName())

// newCar.model = 'Pato'
// newCar.brand = 'Ford'

// console.log(newCar.getCarName())

// Lleno un nuevo Array con los objetos creados con la función Car
for (var i = 0; i < oldCars.length; i++) {
  oldCar = oldCars[i]
  newCar = new Car(oldCar.model, oldCar.brand, oldCar.year)
  newCars.push(newCar)
}

console.log(oldCars)
console.log(newCars)
console.log(newCars[0].getCarName())
>>>>>>> c2f959de5b57fcf8f90dbfb8e5721a4a475c9f6f
