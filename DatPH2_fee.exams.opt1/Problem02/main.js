// khai báo danh sách product
var listProduct = [
    {   
        imgLink: "../Image/sp1.jpg",
        description: {
            titleDes:"MASSA AST",
            contentDes: "Color: Black, Materia: Meta",
        },
        quantity: 1,
        price: 120,
        disCount: 25,
    },
    {
        imgLink: "../Image/sp2.jpg",
        description: {
            titleDes:"MASSA AST",
            contentDes: "Color: Black, Materia: Meta",
        },
        quantity: 1,
        price: 7,
        disCount: 0,
    },
    {
        imgLink: "../Image/sp3.jpg",
        description: {
            titleDes:"MASSA AST",
            contentDes: "Color: Black, Materia: Meta",
        },
        quantity: 1,
        price: 120,
        disCount: 25,
    }
];

// khai báo table select đến tag table của html
var tableBill = document.getElementById("table-bill");

// khai báo hàm render
function render(){
    listInner = listProduct.map(function(item){
        return `<tr>
                    <td><img src="${item.imgLink}"></img></td>
                    <td>
                        ${item.description.titleDes}<br>
                        ${item.description.contentDes}
                    </td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-secondary">${item.quantity}</button>
                            <button type="button" class="subtrack btn btn-secondary">-</button>
                            <button type="button" class="increase btn btn-secondary">+</button>
                            <button type="button" class="multiply btn btn-danger">x</button>
                        </div>
                    </td>
                    <td>$${item.price}</td>
                    <td>${item.disCount ==0 ? "" : "$"+item.disCount * item.quantity}</td>
                    <td>$${Math.ceil(item.price* item.quantity *12.5/100)}</td>
                    <td>$${item.price* item.quantity - item.disCount*item.quantity + Math.ceil(item.price* item.quantity *12.5/100)}</td>
                </tr>`
    })
    listInner.unshift(
        `<tr  class="title-table">
            <td>Product</td>
            <td>Description</td>
            <td>Quanlity/Update</td>
            <td>Price</td>
            <td>Discount</td>
            <td>Tax</td>
            <td>Total</td>
        </tr>`
    )
    listInner.push(
        `<tr>
            <td colspan="6" class= "text-right">Total price: </td>
            <td>$${getTotal().totalPrice}</td>
        </tr>`
    )
    listInner.push(
        `<tr>
            <td colspan="6"  class= "text-right">Total Discount: </td>
            <td>$${getTotal().totalDiscount}</td>
        </tr>`
    )
    listInner.push(
        `<tr>
            <td colspan="6"  class= "text-right">Total Tax: </td>
            <td>$${getTotal().totalTax}</td>
        </tr>`
    )
    tableBill.innerHTML = listInner.join("");
};

// render lần đầu
render();

// số lượng danh sách thay đổi nên ta dùng uỷ quyền trong js, không thể dùng onclick đơn thuần
tableBill.addEventListener("click", function(e){
    // hàm tăng
    if(e.target.className.split(" ")[0] == "increase"){//so sánh class đầu tiên của e.target với increase
        var increase= document.getElementsByClassName("increase");
        for(var i=0; i< increase.length; i++){
            if(e.target == increase[i]){
                listProduct[i].quantity++;
            }
        }
        render();
    }
    // hàm giảm
    if(e.target.className.split(" ")[0] == "subtrack"){
        var subtrack= document.getElementsByClassName("subtrack");
        for(var i=0; i< subtrack.length; i++){
            if(e.target == subtrack[i]){
                if(listProduct[i].quantity>1){
                    listProduct[i].quantity--;
                }
            }   
        }
        render();
    }
    // hàm remove item
    if(e.target.className.split(" ")[0] == "multiply"){
        var multiply= document.getElementsByClassName("multiply");
        for(var i=0; i< multiply.length; i++){
            if(e.target == multiply[i]){
                listProduct.splice(i, 1);
            }  
        }
        render();
    }
})

// khai báo hàm get total trả về 1 đối tượng gồm 3 property totalPrice totalDiscount totalTax dùng cho hàm render
function getTotal(){
    var totalPrice=0;
    var totalDiscount=0;
    var totalTax=0;
    for(var i=0; i< listProduct.length; i++){
        totalTax += Math.ceil(listProduct[i].price* listProduct[i].quantity *12.5/100);
        totalDiscount += listProduct[i].disCount* listProduct[i].quantity;
        totalPrice += listProduct[i].price * listProduct[i].quantity;
    }
    totalPrice = totalPrice - totalDiscount + totalTax;
    return {
        totalPrice : totalPrice,
        totalDiscount : totalDiscount,
        totalTax : totalTax,
    };
}

