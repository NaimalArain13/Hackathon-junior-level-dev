interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const productList: Product[] = [
  { id: 1, name: "Trouser", quantity: 5, price: 7 },
  { id: 2, name: "T-Shirt", quantity: 8, price: 10 },
  { id: 3, name: "High Neck", quantity: 7, price: 9 },
  { id: 4, name: "Denim Jeans", quantity: 5, price: 10 },
  { id: 5, name: "Watch", quantity: 4, price: 9 },
];

function displayProducts(products: Product[]) {
  const tableBody = document.querySelector(
    "#inventoryTable tbody"
  ) as HTMLElement;
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
  const inputName = document.getElementById("productName") as HTMLInputElement;
  const inputQuantity = document.getElementById(
    "productQuantity"
  ) as HTMLInputElement;
  const inputPrice = document.getElementById(
    "productPrice"
  ) as HTMLInputElement;

  const newProduct: Product = {
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
  (document.querySelector("#productName") as HTMLInputElement).value = "";
  (document.querySelector("#productQuantity") as HTMLInputElement).value = "";
  (document.querySelector("#productPrice") as HTMLInputElement).value = "";
};

document.querySelector("form")?.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const name = (document.querySelector("#productName") as HTMLInputElement).value.trim();
  const quantity = parseInt((document.querySelector("#productQuantity") as HTMLInputElement).value.trim());
  const price = parseInt((document.querySelector("#productPrice") as HTMLInputElement).value.trim());

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
  const errorElement = document.querySelector("#error-message") as HTMLElement;
  if (errorMessage) {
    alert(errorElement.textContent = errorMessage);
  } else {
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
