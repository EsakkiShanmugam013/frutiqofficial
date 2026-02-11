const price = 49;
let qty = 1;
let flavour = "mango";

const bgMap = {
  mango: "images/bg-mango.jpg",
  apple: "images/bg-apple.jpg",
  strawberry: "images/bg-strawberry.jpg"
};

function openOrder(type) {
  flavour = type;
  qty = 1;

  document.getElementById("qty").innerText = qty;
  document.getElementById("total").innerText = price;
  document.getElementById("orderTitle").innerText =
    type.charAt(0).toUpperCase() + type.slice(1) + " Order";

  document.getElementById("bg").style.backgroundImage =
    `url('${bgMap[type]}')`;

  document.getElementById("modalBg").classList.add("show");
  document.getElementById("orderModal").classList.add("show");
}

function closeOrder() {
  document.getElementById("modalBg").classList.remove("show");
  document.getElementById("orderModal").classList.remove("show");
}

function changeQty(val) {
  qty += val;
  if (qty < 1) qty = 1;
  document.getElementById("qty").innerText = qty;
  document.getElementById("total").innerText = qty * price;
}
