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
  nompbre:"Tripode Fotopro DV-2 video",
  precio :"159$"


},
{

  imagen: "https://www.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/02/nikon-d3200-2951910.jpg",
  nompbre: "camara nikon",
  precio: "450$"


}]