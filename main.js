const companyData = {
  name: "Acme Corporation",
  primaryColor: "#2c5545",
  backgroundColor: "#e3e3e3",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};

console.log(companyData);



let companyNameDOM = document.getElementById("companyName");
companyNameDOM.textContent = companyData.name

let tittlecompanyNameDOM = document.getElementById("tittlecompanyName");
tittlecompanyNameDOM.textContent = companyData.name

let imageHeroDOM = document.getElementById("companyImage")
imageHeroDOM.src = companyData.imageUrl

let companyClaimDOM = document.getElementById("companyClaim")
companyClaimDOM.textContent = companyData.claim

let companyTextDOM = document.getElementById("companyText")
companyTextDOM.textContent = companyData.text



let root = document.documentElement
root.style.setProperty ("--primary-color",companyData.primaryColor)
root.style.setProperty ("--back-color",companyData.backgroundColor)

// Boton save
let botonEditCompanyDOM= document.getElementById("editCompanyBtn")
let companyFormDOM = document.getElementById("companyForm")


botonEditCompanyDOM.addEventListener('click', function() {
  companyFormDOM.classList.remove('hidden')
});

let closeCompanyFormBtnDOM = document.getElementById("closeCompanyFormBtn")

closeCompanyFormBtnDOM.addEventListener('click', function() {
  companyFormDOM.classList.add('hidden')
});

// nacho

let companynameinputDOM =document.getElementById("companyNameInput")

companynameinputDOM.setAttribute("value",companyData.name)


let companyImageURLInputDOM =document.getElementById("companyImageURLInput")

companyImageURLInputDOM.setAttribute("value",companyData.imageUrl)

let primaryColorInputDOM =document.getElementById("primaryColorInput")

primaryColorInputDOM.setAttribute("value",companyData.primaryColor)

let backgroundColorInputDOM= document.getElementById("backgroundColorInput")

backgroundColorInputDOM.setAttribute("value",companyData.backgroundColor)

let companyClaimInputDOM =document.getElementById("companyClaimInput")

companyClaimInputDOM.setAttribute("value",companyData.claim)

let companyTextInputDOM =document.getElementById("companyTextInput")

companyTextInputDOM.textContent=companyData.text

let buttonSaveDOM = document.getElementById ("buttonSave")

buttonSaveDOM.addEventListener ("click", function(event) {
  event.preventDefault()
  companyNameDOM.textContent = companynameinputDOM.value
  tittlecompanyNameDOM.textContent = companynameinputDOM.value
  imageHeroDOM.src = companyImageURLInputDOM.value
  companyClaimDOM.textContent = companyClaimInputDOM.value
  companyTextDOM.textContent = companyTextInputDOM.value
  root.style.setProperty ("--primary-color",primaryColorInputDOM.value)
  root.style.setProperty ("--back-color",backgroundColorInputDOM.value)
  companyFormDOM.classList.add('hidden')
})

let novedadesyofertas =[ 
{
  imagen: "https://todo-fotografia.com/wp-content/uploads/2013/02/AFS_85_G_front.png",
  nombre:"Objetivo AF-S Nikkor 85mm f/1.4G",
  precio: "500$"


},
{

  imagen:"https://www.percyphoto.com/2807-large_default/tripode-fotopro-dv-2-video.jpg",
  nombre:"Tripode Fotopro DV-2 video",
  precio :"159$"


},
{

  imagen: "https://www.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/02/nikon-d3200-2951910.jpg",
  nombre: "camara nikon",
  precio: "450$"


}]
//save boton Personalizar productos
let editProductBtnDOM= document.getElementById("editProductBtn")
let productFormDOM = document.getElementById("productForm")


editProductBtnDOM.addEventListener('click', function() {
  productFormDOM.classList.remove('hidden')
});

let closeProductFormBtnDOM = document.getElementById("closeProductFormBtn")

closeProductFormBtnDOM.addEventListener('click', function() {
  productFormDOM.classList.add('hidden')
});


//objeto 1 del array get and set

let productImageURLInput1DOM = document.getElementById ("productImageURLInput1")
productImageURLInput1DOM.setAttribute("value",novedadesyofertas[0].imagen)

let productNameInput1DOM= document.getElementById("productNameInput1")
productNameInput1DOM.setAttribute("value",novedadesyofertas[0].nombre)

let productPriceInput1DOM = document.getElementById ("productPriceInput1")
productPriceInput1DOM.setAttribute("value",novedadesyofertas[0].precio)

//objeto 2

let productImageURLInput2DOM = document.getElementById("productImageURLInput2")
productImageURLInput2DOM.setAttribute("value",novedadesyofertas[1].imagen)


let productNameInput2DOM= document.getElementById("productNameInput2")
productNameInput2DOM.setAttribute("value",novedadesyofertas[1].nombre)

let productPriceInput2DOM = document.getElementById ("productPriceInput2")
productPriceInput2DOM.setAttribute("value",novedadesyofertas[1].precio)

//OBJETO 3
let productImageURLInput3DOM = document.getElementById("productImageURLInput3")
productImageURLInput3DOM.setAttribute("value",novedadesyofertas[2].imagen)


let productNameInput3DOM= document.getElementById("productNameInput3")
productNameInput3DOM.setAttribute("value",novedadesyofertas[2].nombre)

let productPriceInput3DOM = document.getElementById ("productPriceInput3")
productPriceInput3DOM.setAttribute("value",novedadesyofertas[2].precio)



//BOTON SALVAR MODIFICACIONES


let imagenproducto1DOM= document.getElementById("imagenproducto1")
let nombreproducto1DOM=document.getElementById("nombreproducto1")
let precioproducto1DOM= document.getElementById("precioproducto1")

let imagenproducto2DOM= document.getElementById("imagenproducto2")
let nombreproducto2DOM=document.getElementById("nombreproducto2")
let precioproducto2DOM= document.getElementById("precioproducto2")

let imagenproducto3DOM= document.getElementById("imagenproducto3")
let nombreproducto3DOM=document.getElementById("nombreproducto3")
let precioproducto3DOM= document.getElementById("precioproducto3")


//boton salvar
let buttonSaveProductsDOM = document.getElementById ("buttonSaveProducts")
buttonSaveProductsDOM.addEventListener ("click", function(event) {
  event.preventDefault()
 
  imagenproducto1DOM.src= productImageURLInput1DOM.value
  nombreproducto1DOM.textContent= productNameInput1DOM.value
  precioproducto1DOM.textContent= productPriceInput1DOM.value





  companyFormDOM.classList.add('hidden')
})
