// let addcart = document.querySelectorAll(".plus")
// let addCartParent = document.querySelector(".cart-parent")

// console.log(addCartParent);


// addcart.forEach((plus)=>{
//     plus.addEventListener("click", (event)=>{
//         let cardParent = event.target.parentElement.parentElement;
//         let cartImg = cardParent.querySelector(".cart-image").src;
//         let cartName = cardParent.querySelector("h6").innerHTML;
//         let cartPrice = cardParent.querySelector("span").innerHTML;

//         update(cartImg,cartName,cartPrice)
//     })
// })

// function update(cartImg,cartName,cartPrice){
    
//     let template = `
        
//           <div class="card h-50 text-center">
//             <img src=${cartImg} class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${cartName}</h5>
//               <span class="text-primary">${cartPrice}<span class="text-success">20%off</span></span><br></br>
//                  <button class="bg-secondary rounded-2">Add</button>
//             </div>
//           </div>
       
//     `
//     let div = document.createElement("div")
//     div.classList.add("col-12")
//     div.classList.add("col-sm-6")
//     div.classList.add("col-md-4")
//     div.classList.add("col-lg-3")

//     div.innerHTML = template;

//     addCartParent.append(div)

//     console.log(addCartParent);
    
// }


let cartbtn = document.querySelectorAll(".product-card button")



cartbtn.forEach((item)=>{
  item.addEventListener("click", (event)=>{
    
   let cardParent = event.target.parentElement.parentElement;

   let productImg = cardParent.querySelector("img").src
   let productName = cardParent.querySelector(".card-title").innerHTML
   let productPrice = cardParent.querySelector(".product-price").innerHTML
    
   
    updateCart(productImg, productName, productPrice)
  })
})

let offcanvasBody = document.querySelector(".offcanvas-body")

function updateCart(img, name, price){
  let template = `
    <div class="d-flex align-items-center justify-content-between">
        <img src=${img} style="height: 100px; width: 150px;">
        <div>
          <h5 class="card-title">${name}</h5>
          <p class="text-primary">&#8377; ${price} /-...</p>
        <button class="bg-secondary rounded-2">Add&nbsp;to&nbsp;Cart</button>
        </div>
         <div>
          <img class="bg-danger del-btn" onclick="del(event)" style="height: 50px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALBJREFUSEvtldENgzAMRO82KZuUUTpJR2EUGIVNjIIUKU2I7SaN+kP+wNjvzlYwMfhwcH2oABF5AlgAPCpCdgAvkltNqAVYAQSIdnaSUytAQiLJSyEiosbPXE2aVcCKF4CY0Dv41PGHg+GAqNxjPXWpfd88vJ8CcoXWcwp3ObAKdrfoBhT36tuW3DMwf03dLbIILQDPosm5G8k5f1m7yWGLvR3bLNarrs7/Ln2r9574AdxozhlwDkgoAAAAAElFTkSuQmCC"/>
        </div>
      </div>
  `

  let div = document.createElement("div")
  div.innerHTML = template

  offcanvasBody.append(div)
}

function del(event){
  let cartDelParent = event.target.parentElement.parentElement;
  cartDelParent.remove()
  
}




let btncart = document.querySelectorAll(".cartbtn")
let abtn = document.querySelector(".add_cart")

btncart.forEach((item)=>{
  item.addEventListener("click", ()=>{
  abtn.innerHTML++
  })
})









let wh_btn = document.querySelectorAll(".wh-card-btn")
let cartCount = document.querySelector(".cart_text b")

wh_btn.forEach((item)=>{
  item.addEventListener("click", ()=>{
    cartCount.innerHTML++
  })
})
