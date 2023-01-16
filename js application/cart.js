const addToCart=(id)=>{

    const cartedList=JSON.parse(localStorage.getItem("cartedItems")) ? JSON.parse(localStorage.getItem("cartedItems")) : []

    const allProducts = JSON.parse(localStorage.getItem("productData"))

    ? JSON.parse(localStorage.getItem("productData"))

    : [];



    const menProduct=allProducts.find((product)=>{

      return product.id === id

    })

    cartedList.push(menProduct)

      localStorage.setItem('cartedItems',JSON.stringify(cartedList))

      alert('product added')

  }

const displayCart = () => {
    const productList = JSON.parse(localStorage.getItem("cartedItems"))
        ? JSON.parse(localStorage.getItem("cartedItems"))
        : [];

    productList.forEach((product, index) => {
        var cardContainer = document.getElementById("cartContainer");
        const cardContent = `
        <div style="width:190px;height:380px;border:0.5px solid gray;margin-bottom:25px;box-shadow: 0px 0px 5px 5px gray;border-radius: 8px" >

        <img src=${product.ProductImage} width='190px' height='150px' style="border-radius: 8px 8px 0px 0px"/>
        
              <div style="margin:0px;pading:0px;">
        
                <h5 style="margin:2px;pading:0px;text-align:center;font: 18px cursive;color: gray;font-weight:bold"> Name : ${product.ProductName} </h5>
                
                <p style="text-align:center;font: 16px cursive;color: gray;" >Price :${product.ProductCost}</p>

             <button type="button" onClick={removeToCart(${product.ProductId})} class="btn btn-warning">Remove</button>
            </div>
         </div>`;

        cardContainer.innerHTML += cardContent;
    });
}
displayCart()

