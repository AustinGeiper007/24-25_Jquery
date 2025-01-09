function addProduct(){
    sessionStorage.setItem("price", "14.99")
    updateTotal();
}
function updateTotal(){
        $("input#total").val(sessionStorage.getItem("total"));
}