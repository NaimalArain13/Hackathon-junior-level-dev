"use strict";
var _a;
const productList = [
    { id: 1, name: "Trouser", quantity: 5, price: 7 },
    { id: 2, name: "T-Shirt", quantity: 8, price: 10 },
    { id: 3, name: "High Neck", quantity: 7, price: 9 },
    { id: 4, name: "Denim Jeans", quantity: 5, price: 10 },
    { id: 5, name: "Watch", quantity: 4, price: 9 },
];
function displayProducts(products) {
    const tableBody = document.querySelector("#inventoryTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows
    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>$${product.price}</td>
        
      `;
        tableBody.appendChild(row);
    });
}
function addProducts() {
    const inputName = document.getElementById("productName");
    const inputQuantity = document.getElementById("productQuantity");
    const inputPrice = document.getElementById("productPrice");
    const newProduct = {
        id: Date.now(),
        name: inputName.value,
        quantity: parseInt(inputQuantity.value),
        price: parseInt(inputPrice.value),
    };
    productList.push(newProduct);
    displayProducts(productList);
    inputName.value = "";
    inputQuantity.value = "";
    inputPrice.value = "";
}
const clearFormInput = () => {
    document.querySelector("#productName").value = "";
    document.querySelector("#productQuantity").value = "";
    document.querySelector("#productPrice").value = "";
};
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#productName").value.trim();
    const quantity = parseInt(document.querySelector("#productQuantity").value.trim());
    const price = parseInt(document.querySelector("#productPrice").value.trim());
    let errorMessage = "";
    if (!name) {
        errorMessage += "Product name cannot be empty";
    }
    if (isNaN(quantity) || quantity <= 0) {
        errorMessage += "Quantity must be a positive number";
    }
    if (isNaN(price) || price <= 0) {
        errorMessage += "Price must be a positive number";
    }
    const errorElement = document.querySelector("#error-message");
    if (errorMessage) {
        alert(errorElement.textContent = errorMessage);
    }
    else {
        errorElement.textContent = "";
        addProducts();
        clearFormInput();
    }
});
displayProducts(productList);
// //   function removeProduct(id: number) {
// //     const index = productList.findIndex((product) => product.id === id);
// //     if (index !== -1) {
// //       productList.splice(index, 1);
// //       displayProducts(productList);
// //     }
// //   }
// //   document.querySelectorAll("edit-btn").forEach((button)=>{
// //     button.addEventListener("click" , ((e:any)=>{
// //         const id = parseInt((e.target as HTMLElement).getAttribute("data-id")!)
// //         removeProduct(id)
// //     }))
// //   })
//   const button = document.getElementById("addProductButton") as HTMLInputElement
//   button.addEventListener("submit" , addProducts)
