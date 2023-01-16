const search = ()=>{
    const searchbox = document.getElementById("search-item").value.toUpperCase()
    const storeitems = document.getElementById("card")
    const product = document.querySelectorAll(".product")
    const pname = storeitems.getElementsByTagName("h5")

    for(var i=0;i<pname.length;i++){
        let match = product[i].getElementsByTagName('h5')[0]

        if(match){
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox)>-1){
            product[i].style.display = "";
           }else{
            product[i].style.display = "none";
           }

        }
    }
}