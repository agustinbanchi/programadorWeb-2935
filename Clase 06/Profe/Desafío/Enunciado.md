<<<<<<< HEAD
# Crear una función que compare dos textos y encuentre coincidencias parciales
=======
# Crear una función que compare dos textos y encuentre coincidencias parciales [Pieza del Workshop I]
>>>>>>> c2f959de5b57fcf8f90dbfb8e5721a4a475c9f6f

- Crear una función que reciba como parámetros dos string y devuelva `true` en caso de encontrar una coincidencia parcial y `false` en caso contrario, la función no tiene que distinguir mayúsculas de minúsculas. El primer parámetro pasado a la función es el que se va a tratar de encontrarse dentro del segundo, si alguno de los parámetros no es un string también deberá devolver `false`.

```js
<<<<<<< HEAD
includesText('Pa', 'Patricia') // Deverá devolver true

includesText('Patricia', 'Pa') // Deverá devolver false

includesText(2, 'Pa') // Deverá devolver false
=======
includesText('Pa', 'Patricia') // Deberá devolver true

includesText('pa', 'Patricia') // Deberá devolver true

includesText('Patricia', 'Pa') // Deberá devolver false

includesText(2, 'Pa') // Deberá devolver false
>>>>>>> c2f959de5b57fcf8f90dbfb8e5721a4a475c9f6f
```

> Hint: Se deberán pasar los parámetros recibidos a mayúsculas y luego hacer la comparación mediante `indexOf` para poder encontrar coincidencias parciales sin importar mayúsculas y minúsculas.

**Documentación:**

<<<<<<< HEAD
[toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
=======
[typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

[toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

>>>>>>> c2f959de5b57fcf8f90dbfb8e5721a4a475c9f6f
[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)