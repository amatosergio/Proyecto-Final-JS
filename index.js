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
    agregarEvento() {
        const btnAgregar = document.getElementById(this.id)
        const productoElegido = stock.find(prod => prod.id == this.id)
        btnAgregar.addEventListener('click', () => agregarCarrito(productoElegido))
    }
}
let iphone11 = new Producto('Iphone 11', 500, 10, 1, './Imagenes/Iphone11.png')
let iphone12 = new Producto('Iphone 12', 700, 5, 2, './Imagenes/Iphone12Pro.png')
let iphone13 = new Producto('Iphone 13', 900, 5, 3, './Imagenes/Iphone13Pro.png')
let macbookAirM1 = new Producto('Macbook Air M1', 900, 10, 4, './Imagenes/macbookairm1.jpg')
let macbookAirM2 = new Producto('Macbook Air M2', 1200, 10, 5, './Imagenes/macbookairm2.jpg')
let macbookPro = new Producto('Macbook Pro M1pro', 1900, 5, 6, './Imagenes/macbookprom1projpg.jpg')

let totalCompra = 0
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

stock.forEach(e => {
    e.desplegarApple()
})

stock.forEach(e => {
    e.agregarEvento()
})

function agregarCarrito(stock) {
    const enCarr = carrito.find(prod => prod.id == stock.id)

    if (!enCarr) {
        carrito.push({ ...stock, cantidad: 1 })
    } else {
        const withoutCar = carrito.filter(prod => prod.id != stock.id)
        carrito = [...withoutCar, { ...enCarr, cantidad: enCarr.cantidad + 1 }]
    }
    counter.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
}
const counter = document.getElementById('cartCounter')
counter.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

const titulo = document.getElementById('tituloForm')
const formulario = document.getElementById('formulario')
formulario.onsubmit = (event) => {
    event.preventDefault()
    const datosUsuario = []
    for (const input of event.target.children) {
        const obj = {}
        obj['tipo'] = input.name
        obj['valor'] = input.value
        datosUsuario.push(obj)
    }
    localStorage.setItem('info', JSON.stringify(datosUsuario))
    
}


    const info = JSON.parse(localStorage.getItem('info'))
    let nombre = ''
    let apellido = ''
    info.forEach(dato => {
        if (dato.tipo === 'name') {
            nombre = dato.valor
        }
        if (dato.tipo === 'lastname') {
            apellido = dato.valor
        }
    })

    console.log('name' ,nombre)
    console.log('apellido' ,apellido)


if ( nombre!== '' || apellido!== '') {
titulo.innerText = `Hola  ${nombre} ${apellido}, tu consulta fue recibida correctamente` 
}