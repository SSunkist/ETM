// 로고를 누르면 main으로 이동 //
const logo = document.querySelector("#logo > img");
logo.addEventListener("click", function() {
    location.href="http://localhost/main";
});

// 상세검색을 누르면 상세검색 모달창 띄우기 //
const modal = document.querySelector("#checkBox");
const modalButton = document.querySelector("#detailSearch");
const blur = document.querySelector("#allWrap");
modalButton.addEventListener("click", function() {
    modal.style.display = "block";
    blur.style.opacity = "0.5";
});

// 상세검색 모달창 닫기 버튼 //
const close = document.querySelector("#checkBoxX > p");
close.addEventListener("click", function() {
    modal.style.display = "none";
    blur.style.opacity = "1";
});

// 로그인, 장바구니, 마이페이지를 클릭하면 해당 페이지로 이동 //
// + 로그인 안했을때 장바구니, 마이페이지를 클릭하면 alert //
const login = document.querySelector("#login");
const cart = document.querySelector("#cart");
const mypage= document.querySelector("#mypage");
if (login != null) {
    login.addEventListener("click", function() {
        location.href = "/login";
    });
}
cart.addEventListener("click", function() {
    if(login != null) {
        window.alert("로그인 후 이용해주세요.");
    } else {
        const id = document.querySelector("#userid").value;
        location.href = "/cart?id=" + id;
    }
});
mypage.addEventListener("click", function() {
    if(login != null) {
        window.alert("로그인 후 이용해주세요.");
    } else {
        const id = document.querySelector("#userid").value;
        location.href = "/mypage?id=" + id;    
    }
});

// 로그아웃 //
const logout = document.querySelector("#logout");
logout.addEventListener("click", function() {
    const form = document.forms.logout;
    form.submit();
});

// 수량 선택 안하고 장바구니버튼, 구매하기버튼 클릭시 수량선택요청alert 띄우기 //
const minus = document.querySelector(".qtyminus");
    const plus = document.querySelector(".qtyplus");
    const qty = document.querySelector(".qty");
    const product_price = parseInt(document.querySelector(".product_price").innerHTML.replace(/,/g,''))
    const price = document.querySelector(".price")
    minus.addEventListener("click",() => {
        if (parseInt(qty.innerHTML) == 0) {
            qty.innerHTML = 0;
        }
        else {
            qty.innerHTML -= 1;
            price.innerHTML = parseInt(qty.innerHTML) * product_price;
        }
    })
    plus.addEventListener("click",() => {
        qty.innerHTML = parseInt(qty.innerHTML) +1;
        price.innerHTML = parseInt(qty.innerHTML) * product_price;
    })

    const cartinsert = document.querySelector(".cart");
    cartinsert.addEventListener("click",() => {
        if(parseInt(qty.innerHTML)<1){
            alert("수량을 선택해주세요");
            return false;
        };
    });

    const orderinsert = document.querySelector(".purchase");
    orderinsert.addEventListener("click",() => {
        if(parseInt(qty.innerHTML)<1){
            alert("수량을 선택해주세요");
            return false;
        };
    });