
$(document).ready(function () {
    var match;
    if ((match = location.href.match(/\?subcategory=(\w*)/)) != null) {
        var subcategoryname = decodeURI(location.href.split("=")[1]);
        $("#subcategory").html(subcategoryname);
        
        getCategoryItems(subcategoryname, function(items){
            for(var item in items){
                items[item]["imgProduct"] = items[item]["Image"];
                addItem(items[item], "../images/inventory/");
            }
        });
    } 
});

function addItem(item, imagepath) {
    var newDiv = $("#tmplProduct").clone();
    var product = item;
    product["lnkItemPicture"] = "item.html?id=" + product["id"];
    product["lnkItemName"] = "item.html?id=" + product["id"];
    json2div(newDiv, product, {"imagepath" : imagepath});
    newDiv.show();
    $("#items").append(newDiv);    
}


