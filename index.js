class Producto {
    constructor(nombre, precio, cantidad, id, img) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.id = id
        this.img = img
    }
    desplegarApple() {
        const card = `
        <div class="card">
            <p>${this.nombre}</p>
            <div>
                <img class='imgProducto' src=${this.img} alt="foto del producto"/>
            </div>
            <div>
                <p>$${this.precio}</p>
            </div>
            <div class="btn-container">
                <button id=${this.id} class='btnAgregar'>AGREGAR AL CARRITO</button>
            </div>
        </div>
    `
        const container = document.getElementById('container')
        container.innerHTML += card 
        }
        agregarEvento (){
            const btnAgregar = document.getElementById(this.id)
            const productoElegido= stock.find(prod => prod.id == this.id)
            btnAgregar.addEventListener('click',()=> agregarCarrito (productoElegido))
        } 
}
let iphone11 = new Producto('Iphone 11', 500, 10, 1,'./Imagenes/Iphone11.png')
let iphone12 = new Producto('Iphone 12', 700, 5, 2, './Imagenes/Iphone12Pro.png')
let iphone13 = new Producto('Iphone 13', 900, 5, 3, './Imagenes/Iphone13Pro.png')
let macbookAirM1 = new Producto('Macbook Air M1', 900, 10, 4, './Imagenes/macbookairm1.jpg')
let macbookAirM2 = new Producto('Macbook Air M2', 1200, 10, 5, './Imagenes/macbookairm2.jpg')
let macbookPro = new Producto('Macbook Pro M1pro', 1900, 5, 6, './Imagenes/macbookprom1projpg.jpg')

let totalCompra = 0
/* let producto = parseInt(prompt('Ingresa el numero del producto que quieres comprar: 1.Iphone 11 - 2.Iphone 12- 3.Iphone 13 4.Macbook Air M1- 5.Macbook air M2- 6.Macbook Pro M1Pro-')
) */
let seguirCompra = true
let decision
let carrito = []
let stock = []
stock.push(iphone11)
stock.push(iphone12)
stock.push(iphone13)
stock.push(macbookAirM1)
stock.push(macbookAirM2)
stock.push(macbookPro)

stock.forEach(e=>{
    e.desplegarApple()
})
stock.forEach(e=>{
    e.agregarEvento()
})
function agregarCarrito(stock) { 
    console.log(stock)
} 

while (seguirCompra === true) {
    const productoElegido = stock.find(prod => prod.id === producto)
    if (producto) {
        totalCompra = totalCompra + productoElegido.precio
    }
    else {
        producto = parseInt(prompt('Ingresa el numero del producto que quieres comprar: 1.Iphone 11 - 2.Iphone 12- 3.Iphone 13 4.Macbook Air M1- 5.Macbook air M2- 6.Macbook Pro M1Pro-'))
        continue
    }
    decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
    if (decision === 1) {
        producto = parseInt(
            prompt(
                'Ingresa el numero del producto que quieres comprar: 1.Iphone 11 - 2.Iphone 12- 3.Iphone 13 4.Macbook Air M1- 5.Macbook air M2- 6.Macbook Pro M1Pro-'
            )
        )
    } else if (decision === 2) {
        seguirCompra = false
    }
}
alert('El valor total , sin tax es : ' + totalCompra + " dolares")

function calculartax(valor) {
    const impuestos = valor * (8 / 100)
    return valor + impuestos
}
let valorFinalConTax = calculartax(totalCompra)
alert('El valor final a pagar , con tax incluidos es de : ' + valorFinalConTax)
alert('¡ Muchas Gracias por tu compra !')

