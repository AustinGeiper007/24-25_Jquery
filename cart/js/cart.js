function addProduct(){
    sessionStorage.setItem("total", "$15.00")
    updateTotal();
}
function updateTotal(){
        $("input#total").val(sessionStorage.getItem("total"));
}