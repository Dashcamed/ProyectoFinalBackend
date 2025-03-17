# Panaderia hecha con Node js MongoDB y express-handlebars

## Pruebas carrito de compras en POSTMAN

* PUT : Modificar todo un carrito de compras:
  URI: http://localhost:8080/cart/67d71ccbfc455b60aaf8c4cc

  ```
  {
      "products": [
          {
              "product": "67d2221d30d91ba94dade9fa",
              "quantity": 10
          },
          {
              "product":"67d238be87850f96671b845f",
              "quantity":4
          }
      ]
  }
  ```
* PUT : Modificar producto de un carrito:
  URI: http://localhost:8080/cart/67d71ccbfc455b60aaf8c4cc/products/67d2221d30d91ba94dade9fa

  ```
  {
      "quantity": 20
  }
  ```
* POST: Crear un carrito:
  URI: http://localhost:8080/cart/

  ```
  {
      "products": [
          {
              "product": "65fa1234abcd5678ef901234",
              "quantity": 2
          },
          {
              "product": "65fa5678abcd1234ef907890",
              "quantity": 1
          }
      ]
  }
  ```
* DELETE: Vaciar un carrito

  URI: http://localhost:8080/cart/67d71ccbfc455b60aaf8c4cc
