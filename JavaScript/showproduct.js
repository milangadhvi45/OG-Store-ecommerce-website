/*
let productlistview = document.getElementById('productlistview')
let productdetailview = document.getElementById('productdetailview')
let productdetailcontent = document.getElementById('productdetailcontent')
//let morecard = document.getElementById('morecard');
let swiper = document.querySelector('.swiper')
let h2heading = document.getElementById('h2heading')
let mainheading = document.getElementById('mainheading');
let footersection = document.getElementById('footersection')
let sectionMore = document.getElementById('sectionMore')
function showlistview(){
  productlistview.style.display = 'block';
  productdetailview.style.display = 'none';
  navbar.style.display = 'block';
  //morecard.style.display = 'grid';
  swiper.style.display = 'block'
 // h2heading.style.display = 'flex'
  sectionnav.style.display = 'flex'
  sectionMore.style.display = 'block';
  footersection.style.display = 'flex'


}

function showdetailsview(){
 productlistview.style.display = 'none';
  productdetailview.style.display = 'block';
  navbar.style.display = 'none';
  //morecard.style.display = 'none';
  swiper.style.display = 'none'
 // h2heading.style.display = 'none'
  sectionnav.style.display = 'none'
  sectionMore.style.display = 'none';


   footersection.style.display = 'none'

}

let allproducts = JSON.parse(localStorage.getItem('allproducts')) || [];

let lsproducts = JSON.parse(localStorage.getItem('lsproducts')) || []

    let productTemplate = document.getElementById('producttemplate')
    let ProductContainer = document.getElementById('ProductContainer')

      ProductContainer.addEventListener('click' , (event) => {
        let clickedCard = event.target.closest('[id^="card-"]');
        if(clickedCard){
          let  productid = clickedCard.id.replace('card-', '');

            let productData = allproducts.find(p => p.id == productid);
            if (productData) {
            showProductDetail(productData);
           }
        }
})
    let cartquantity = document.getElementById('cartquantity');


      const updatecartcount = () => {
        cartquantity.textContent = lsproducts.length
      }

updatecartcount()

   function savecart(){
    localStorage.setItem('lsproducts' , JSON.stringify(lsproducts));
   }

      let showProductDetail = (curprod) => {
      let  {image , name , description , price , stock , category , id} = curprod
        let fullProductTemplate = document.getElementById('fullproducttemplate');
        let productDetailClone = document.importNode(fullProductTemplate.content , true);

     productDetailClone.querySelector('[id="card"]').id = `card-${id.value}`
     productDetailClone.querySelector('#category').textContent = category.value;
    productDetailClone.querySelector('#fullproductimg').src = image;
    productDetailClone.querySelector('#fullproductname').textContent = name;
    productDetailClone.querySelector('#fullproductDescription').textContent = description;
    productDetailClone.querySelector('#fullproductprice').textContent = `₹${Number(price)}`;
    productDetailClone.querySelector('#fullproductactualprice').textContent = `₹${Number(price) * 2}`;
    
    productDetailClone.querySelector('#productStock').textContent = stock;
    let back = productDetailClone.getElementById('back')

  
if (back) {
    back.addEventListener('click', () => {
        showlistview();
        // Make sure slider reinitializes if needed
        if (typeof swiper !== 'undefined') {
            swiper.update();
        }
    });
}


   let quantityelement = productDetailClone.getElementById('fullproductStock');
   quantityelement.textContent = 1;
   productDetailClone.getElementById('cartDencrement').addEventListener('click', () => {
   
    let quantity = quantityelement.textContent;
    if (quantity > 1) {
      quantity--;
    }
    quantityelement.innerHTML = quantity
    
  })

  productDetailClone.getElementById('cartIncrement').addEventListener('click', () => {
    let quantity = quantityelement.textContent;
    if (quantity < stock) {
      quantity++;
    }
    quantityelement.innerHTML = quantity;
  })
    
   productDetailClone.querySelector('.addtocart').addEventListener('click', () => {
       let quantitytoadd = parseInt(quantityelement.textContent);

         let existingproduct = lsproducts.find(p => p.id === id);

       if (existingproduct) {
      existingproduct.quantity += quantitytoadd;
         
         existingproduct.totalprice = existingproduct.quantity * price;
      
      }
   
   else{

    const cartitem = {
       id : id,
       name : name,
       quantity : quantitytoadd,
       unitprice : price,
       totalprice : quantitytoadd * price
    }

    lsproducts.push(cartitem);
   }
   savecart()
   updatecartcount()
   })
 
       productdetailcontent.innerHTML = '';
    productdetailcontent.appendChild(productDetailClone);

    updatecartcount()
    

    showdetailsview()
    }

async function fetchdata() {
    let response = await fetch('alljson.json');
    let convert = await response.json();


    allproducts = convert;
    localStorage.setItem('allproducts', JSON.stringify(allproducts));

    let shirtsToShow = allproducts.filter(product => product.category === 'shirt').slice(-2)
    let tshirtsToShow = allproducts.filter(product => product.category === 'tshirt').slice(-2);
    let asrisToShow = allproducts.filter(product => product.category === 'accesories').slice(-2);
    let pentsToShow = allproducts.filter(product => product.category === 'pents').slice(-2);
    let capsToShow = allproducts.filter(product => product.category === 'caps').slice(0 , 2);
    let shosToshow = allproducts.filter(product => product.category === 'shoes').slice(0, 2);


    let homePageProducts = [...shirtsToShow , ...tshirtsToShow , ...asrisToShow , ...pentsToShow , ...capsToShow , ...shosToshow]

    console.log(allproducts);
    showproducts(homePageProducts);
}
fetchdata();

let emaininput = document.getElementById('emaininput');


function showproducts(products){
      if (!products) {
        return false;
      }

      products.forEach((curElem) => {
        let  {id , name , image , description , category , price} = curElem
        let productclone = document.importNode(productTemplate.content , true);
        
        productclone.querySelector('[id="card"]').id = `card-${id}`

        productclone.querySelector('#productimg').src = `${image}`;
        productclone.querySelector('#productname').textContent = name;
        productclone.querySelector('#productDescription').textContent = description;
        productclone.querySelector('#category').textContent = category;
        productclone.querySelector('#productprice').textContent = `₹${price}`;
        productclone.querySelector('#productactualprice').textContent = `₹${price * 2}`; // Example
        
        ProductContainer.appendChild(productclone);

})
}
showlistview()
*/
    //showproduct.js file//
          
let productlistview = document.getElementById('productlistview')
let productdetailview = document.getElementById('productdetailview')
let productdetailcontent = document.getElementById('productdetailcontent')
let swiper = document.querySelector('.swiper')
let sectionslider = document.getElementById('sectionslider')  // FIX: Get the section, not the swiper div
let h2heading = document.getElementById('h2heading')
let mainheading = document.getElementById('mainheading');
let footersection = document.getElementById('footersection')
let sectionMore = document.getElementById('sectionMore')
let sectionnav = document.getElementById('sectionnav')
let navbar = document.getElementById('navbar')
let contactsection = document.getElementById('contactsection')
let aboutsection = document.getElementById('aboutsection')

function showlistview(){
  productlistview.style.display = 'block';
  productdetailview.style.display = 'none';
  navbar.style.display = 'block';
  sectionslider.style.display = 'block'
  swiper.style.display = 'block'

  sectionnav.style.display = 'flex'
  if(sectionMore) sectionMore.style.display = 'block';
  if(footersection) footersection.style.display = 'flex'

}

function showdetailsview(){
  productlistview.style.display = 'none';
  productdetailview.style.display = 'block';
  navbar.style.display = 'none';
  sectionslider.style.display = 'none'
 //swiper.style.display = 'none'

  sectionnav.style.display = 'none'
  if(sectionMore) sectionMore.style.display = 'none';
  if(footersection) footersection.style.display = 'none'
  
}

let allproducts = JSON.parse(localStorage.getItem('allproducts')) || [];

let lsproducts = JSON.parse(localStorage.getItem('lsproducts')) || []

let productTemplate = document.getElementById('producttemplate')
let ProductContainer = document.getElementById('ProductContainer')

ProductContainer.addEventListener('click', (event) => {
    let clickedCard = event.target.closest('[id^="card-"]');
    if(clickedCard){
        let productid = clickedCard.id.replace('card-', '');

        let productData = allproducts.find(p => p.id == productid);
        if (productData) {
            showProductDetail(productData);
        }
    }
})

let cartquantity = document.getElementById('cartquantity');

const updatecartcount = () => {
    cartquantity.textContent = lsproducts.length
}

updatecartcount()

function savecart(){
    localStorage.setItem('lsproducts', JSON.stringify(lsproducts));
}

let showProductDetail = (curprod) => {
    // FIX 1: Remove .value - these are plain properties, not form elements!
    let {image, name, description, price, stock, category, id} = curprod
    
    let fullProductTemplate = document.getElementById('fullproducttemplate');
    let productDetailClone = document.importNode(fullProductTemplate.content, true);

    // FIX 2: Use plain values, not .value
    productDetailClone.querySelector('[id="card"]').id = `card-${id}`
    productDetailClone.querySelector('#category').textContent = category;
    productDetailClone.querySelector('#fullproductimg').src = image;
    productDetailClone.querySelector('#fullproductname').textContent = name;
    productDetailClone.querySelector('#fullproductDescription').textContent = description;
    productDetailClone.querySelector('#fullproductprice').textContent = `₹${Number(price)}`;
    productDetailClone.querySelector('#fullproductactualprice').textContent = `₹${Number(price) * 2}`;
    productDetailClone.querySelector('#productStock').textContent = stock;
    
    // FIX 3: Use querySelector instead of getElementById for cloned content
    let back = productDetailClone.querySelector('#back')

    if (back) {
        back.addEventListener('click', () => {
            showlistview();
        });
    }

    let quantityelement = productDetailClone.querySelector('#fullproductStock');
    quantityelement.textContent = 1;
    
    productDetailClone.querySelector('#cartDencrement').addEventListener('click', () => {
        let quantity = parseInt(quantityelement.textContent);
        if (quantity > 1) {
            quantity--;
        }
        quantityelement.innerHTML = quantity
    })

    productDetailClone.querySelector('#cartIncrement').addEventListener('click', () => {
        let quantity = parseInt(quantityelement.textContent);
        if (quantity < stock) {
            quantity++;
        }
        quantityelement.innerHTML = quantity;
    })
    
    productDetailClone.querySelector('.addtocart').addEventListener('click', () => {
        let quantitytoadd = parseInt(quantityelement.textContent);

        let existingproduct = lsproducts.find(p => p.id === id);

        if (existingproduct) {
            existingproduct.quantity += quantitytoadd;
            existingproduct.totalprice = existingproduct.quantity * price;
        } else {
            const cartitem = {
                id: id,
                name: name,
                quantity: quantitytoadd,
                unitprice: price,
                totalprice: quantitytoadd * price
            }
            lsproducts.push(cartitem);
        }
        savecart()
        updatecartcount()
    })
 
    productdetailcontent.innerHTML = '';
    productdetailcontent.appendChild(productDetailClone);

    updatecartcount()
    showdetailsview()
}

async function fetchdata() {
    let response = await fetch('alljson.json');
    let convert = await response.json();

    allproducts = convert;
    localStorage.setItem('allproducts', JSON.stringify(allproducts));

    let shirtsToShow = allproducts.filter(product => product.category === 'shirt').slice(-2)
    let tshirtsToShow = allproducts.filter(product => product.category === 'tshirt').slice(-2);
    let asrisToShow = allproducts.filter(product => product.category === 'accesories').slice(-2);
    let pentsToShow = allproducts.filter(product => product.category === 'pents').slice(-2);
    let capsToShow = allproducts.filter(product => product.category === 'caps').slice(0, 2);
    let shosToshow = allproducts.filter(product => product.category === 'shoes').slice(0, 2);

    let homePageProducts = [...shirtsToShow, ...tshirtsToShow, ...asrisToShow, ...pentsToShow, ...capsToShow, ...shosToshow]

    console.log(allproducts);
    showproducts(homePageProducts);
}
fetchdata();

function showproducts(products){
    if (!products) {
        return false;
    }

    products.forEach((curElem) => {
        let {id, name, image, description, category, price} = curElem
        let productclone = document.importNode(productTemplate.content, true);
        
        productclone.querySelector('[id="card"]').id = `card-${id}`
        productclone.querySelector('#productimg').src = `${image}`;
        productclone.querySelector('#productname').textContent = name;
        productclone.querySelector('#productDescription').textContent = description;
        productclone.querySelector('#category').textContent = category;
        productclone.querySelector('#productprice').textContent = `₹${price}`;
        productclone.querySelector('#productactualprice').textContent = `₹${price * 2}`;
        
        ProductContainer.appendChild(productclone);
    })
}

showlistview()




 /*  ProductContainer.addEventListener('click' , (event) => {
      let  addtocartbutton = event.target.closest('.add-to-cart-button');
     if (addtocartbutton) {

      let card = event.target.closest('[id^="card-"]')
      let productid = card.id.replace('card-', '');

      let productData = allproducts.find(p => p.id == productid);
 
      if (productData) {
        addtocart(event , productData.id , productData.stock);
      }
      
      function addtocart(){
    let addcategory = productData.category;
    let addprice = productData.price;
    let addname =   productData.name
    let addid =   productData.id
    let outsidequantity = 1;
    
     let addobj = { 
      outsidequantity,
      addid,
      addname,addprice,addcategory
    }
    console.log(addobj);
      lsproducts.push(addobj)    

 saveadd()
      }
       return 
     }
    })*/