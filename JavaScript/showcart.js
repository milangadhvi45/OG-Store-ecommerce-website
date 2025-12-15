/*document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById('cartcontainer');
    const fullProductTemplate = document.getElementById('fullproducttemplate');

    const allproducts = JSON.parse(localStorage.getItem('allproducts')) || [];
    let lsproducts = JSON.parse(localStorage.getItem('lsproducts')) || [];

     const saveCart = () => {
        localStorage.setItem('lsproducts', JSON.stringify(lsproducts));
    };   

    saveCart();
    let cartquantity = document.getElementById('cartquantity');

      const updatecartcount = () => {
        cartquantity.textContent = lsproducts.length
        saveCart();
      }

    updatecartcount();
    
     let cartItemsDetails = allproducts.filter(product => {
        return lsproducts.some(cartItem => cartItem.id === product.id);
    });

    cartItemsDetails.forEach((curprod) => {
        const cartItem = lsproducts.find(item => item.id === curprod.id);
        if (!cartItem) return; // Safety check
        
        const { id, name, image, stock} = curprod;
        saveCart();
        
        const cartclone = document.importNode(fullProductTemplate.content, true);

       let cartelement = cartclone.querySelector('#card')
       cartelement.id = `card-${id}`

         let existingprod = lsproducts.find(curquantity => curquantity.id === id);
                    let quntity   = 1;
                    let lsprice   = '';
                    let unitprice = '';
                    saveCart()
        
                    if (existingprod) {
                      quntity = existingprod.quantity;
                      lsprice = existingprod.totalprice;
                      unitprice = existingprod.unitprice; 
                     saveCart() 
       }   
      cartclone.querySelector('#cartproductimg').src = image;
      cartclone.querySelector('#cartproductimg').alt = image;
      cartclone.querySelector('#cartproductname').textContent = name;
      cartclone.querySelector('#productStock').textContent = stock;


   let forq =   cartclone.querySelector('#cartproductStock')
   forq.textContent = quntity;  

   let forp = cartclone.querySelector('#cartproductprice')
   forp.textContent = lsprice

   cartclone.querySelector('.cartIncrement').addEventListener('click' ,() => {
          
           quntity = forq.textContent;
             if(quntity < stock){
        quntity ++;
          }
  forq.innerHTML = quntity;
        saveCart();
    
       lsprice = forp.textContent;
      
     let ls =  existingprod.totalprice = unitprice * quntity;
//console.log(ls);
  forp.innerHTML = ls;
          })   
           
      cartclone.querySelector('.cartDencrement').addEventListener('click' ,() => {
          
           quntity = forq.textContent;
             if(quntity > 1){
        quntity --;
        saveCart()
          }
  //  console.log(quntity);
    forq.innerHTML = quntity;
    
       lsprice = forp.textContent;
      
     let ls =  existingprod.totalprice = unitprice * quntity;
//console.log(ls);
  forp.innerHTML = ls;
  saveCart();

          })   
   
     saveCart();



        let removebtn =  cartclone.querySelector('.removetocart')
        removebtn.addEventListener('click' , () => {
           lsproducts =  lsproducts.filter(p => p.id !== curprod.id);

                 localStorage.setItem('lsproducts' , JSON.stringify(lsproducts));

            cartelement.remove();

           updatecartcount();
                  saveCart();
                    })
    cartContainer.appendChild(cartclone);
 
                  saveCart();

  return {quntity , lsprice};

         })

    })
*/


/*
document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById('cartcontainer');
    const fullProductTemplate = document.getElementById('fullproducttemplate');
    const cartQuantityElement = document.getElementById('cartquantity');

    const allproducts = JSON.parse(localStorage.getItem('allproducts')) || [];
    let lsproducts = JSON.parse(localStorage.getItem('lsproducts')) || [];

     const saveCart = () => {
        localStorage.setItem('lsproducts', JSON.stringify(lsproducts));
    };

    const updateCartCount = () => {
        cartQuantityElement.textContent = lsproducts.length;
    };

    if (lsproducts.length === 0) {
        cartContainer.innerHTML = '<h2>Your cart is empty.</h2>';
        updateCartCount();
        return;
    }

    updateCartCount();

    let cartItemsDetails = allproducts.filter(product => {
        return lsproducts.some(cartItem => cartItem.id === product.id);
    });

    cartItemsDetails.forEach((curprod) => {
        const { id, name, image, stock, price: unitPrice } = curprod; // Use original price as unitPrice

        const cartItem = lsproducts.find(item => item.id === id);

        const cartclone = document.importNode(fullProductTemplate.content, true);

        const cartelement = cartclone.querySelector('#card');
        const quantityElement = cartclone.querySelector('#cartproductStock');
        const priceElement = cartclone.querySelector('#cartproductprice');
        
        cartelement.id = `card-${id}`;
        cartclone.querySelector('#cartproductimg').src = image;
        cartclone.querySelector('#cartproductimg').alt = name;
        cartclone.querySelector('#cartproductname').textContent = name;

        const updateItemInCart = (newQuantity) => {
            cartItem.quantity = newQuantity;
            cartItem.totalPrice = newQuantity * unitPrice;

            quantityElement.textContent = cartItem.quantity;
            priceElement.textContent = `₹${cartItem.totalPrice.toFixed(2)}`;

            saveCart();
        };

        cartclone.querySelector('.cartIncrement').addEventListener('click', () => {
            let currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity < stock) {
                updateItemInCart(currentQuantity + 1);
            }
        });

        cartclone.querySelector('.cartDencrement').addEventListener('click', () => {
            let currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                updateItemInCart(currentQuantity - 1);
            }
        });

        const removebtn = cartclone.querySelector('.removetocart');
        removebtn.addEventListener('click', () => {
            lsproducts = lsproducts.filter(p => p.id !== id);
            saveCart(); 
            cartelement.remove();
            updateCartCount();
            if (lsproducts.length === 0) {
                cartContainer.innerHTML = '<h2 id="cartempty">Fill Your cart 🛒.</h2>';
            }
        });

        quantityElement.textContent = cartItem.quantity;
        priceElement.textContent = `₹${cartItem.totalprice}`;

        cartContainer.appendChild(cartclone);
    });
});

*/
                
    //showcart.js file//
document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById('cartcontainer');
    const fullProductTemplate = document.getElementById('fullproducttemplate');
    const cartQuantityElement = document.getElementById('cartquantity');

    const allproducts = JSON.parse(localStorage.getItem('allproducts')) || [];
    let lsproducts = JSON.parse(localStorage.getItem('lsproducts')) || [];

    const saveCart = () => {
        localStorage.setItem('lsproducts', JSON.stringify(lsproducts));
    };

    const updateCartCount = () => {
        cartQuantityElement.textContent = lsproducts.length;
    };

    if (lsproducts.length === 0) {
        cartContainer.innerHTML = '<h2>Your cart is empty.</h2>';
        updateCartCount();
        return;
    }

    updateCartCount();

    let cartItemsDetails = allproducts.filter(product => {
        return lsproducts.some(cartItem => cartItem.id === product.id);
    });

    cartItemsDetails.forEach((curprod) => {
        // FIX 1: Match the property names with what's stored in localStorage
        const { id, name, image, stock } = curprod;
        
        // Get unitprice from curprod (check both possible property names)
        const unitPrice = curprod.unitprice || curprod.price || 0;

        const cartItem = lsproducts.find(item => item.id === id);

        const cartclone = document.importNode(fullProductTemplate.content, true);

        const cartelement = cartclone.querySelector('#card');
        const quantityElement = cartclone.querySelector('#cartproductStock');
        const priceElement = cartclone.querySelector('#cartproductprice');
        
        cartelement.id = `card-${id}`;
        cartclone.querySelector('#cartproductimg').src = image;
        cartclone.querySelector('#cartproductimg').alt = name;
        cartclone.querySelector('#cartproductname').textContent = name;

        const updateItemInCart = (newQuantity) => {
            // FIX 2: Use lowercase property names to match localStorage structure
            cartItem.quantity = newQuantity;
            cartItem.totalprice = newQuantity * unitPrice; // lowercase 'totalprice'

            quantityElement.textContent = cartItem.quantity;
            priceElement.textContent = `₹${cartItem.totalprice.toFixed(0)}`;

            saveCart();
        };

        cartclone.querySelector('.cartIncrement').addEventListener('click', () => {
            let currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity < stock) {
                updateItemInCart(currentQuantity + 1);
            }
        });

        cartclone.querySelector('.cartDencrement').addEventListener('click', () => {
            let currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                updateItemInCart(currentQuantity - 1);
            }
        });

        const removebtn = cartclone.querySelector('.removetocart');
        removebtn.addEventListener('click', () => {
            lsproducts = lsproducts.filter(p => p.id !== id);
            saveCart(); 
            cartelement.remove();
            updateCartCount();
            if (lsproducts.length === 0) {
                cartContainer.innerHTML = '<h2 id="cartempty">Fill Your cart 🛒.</h2>';
            }
        });

        // FIX 3: Display existing quantity and price from cartItem (use lowercase)
        quantityElement.textContent = cartItem.quantity;
        
        // Check both possible property names for totalprice
        const displayPrice = cartItem.totalprice || cartItem.totalPrice || (cartItem.quantity * unitPrice);
        priceElement.textContent = `₹${displayPrice}`;

        cartContainer.appendChild(cartclone);
    });
});