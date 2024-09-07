//define type of product item
interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

//create array of objects for displaying products in the table
const productList: Product[] = [
  { id: 1, name: "Trouser", quantity: 5, price: 7 },
  { id: 2, name: "T-Shirt", quantity: 8, price: 10 },
  { id: 3, name: "High Neck", quantity: 7, price: 9 },
  { id: 4, name: "Denim Jeans", quantity: 5, price: 10 },
  { id: 5, name: "Watch", quantity: 4, price: 9 },
];

//displaying product data into the table
function displayProducts(products: Product[]) {
  //get the table element through id
  const tableBody = document.querySelector("#inventoryTable tbody") as HTMLElement;
  // Clear existing rows
  tableBody.innerHTML = ""; 
  //loop through through the array of objects
  products.forEach(product => {
    //get table row through id
    const row = document.createElement("tr");

    //add data in the row dynamicaly
    row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>$${product.price}</td>
        
      `;
    //add the rows as child element of table element
    tableBody.appendChild(row);
  });
}

//add product data
function addProducts() {
  //get the input fields through id
  const inputName = document.getElementById("productName") as HTMLInputElement;
  const inputQuantity = document.getElementById("productQuantity") as HTMLInputElement;
  const inputPrice = document.getElementById("productPrice") as HTMLInputElement;

  //create new product object that will be added into the existing array 
  const newProduct: Product = {
    id: Date.now(),
    name: inputName.value,
    quantity: parseInt(inputQuantity.value),
    price: parseInt(inputPrice.value),
  };

  //push the input fields data into the existing product list
  productList.push(newProduct);

  //re-render the list after adding the new product
  displayProducts(productList);
  //clear the input field after adding the product
  clearFormInput()
  
}
//function to clear the fields
const clearFormInput = () => {
  (document.querySelector("#productName") as HTMLInputElement).value = "";
  (document.querySelector("#productQuantity") as HTMLInputElement).value = "";
  (document.querySelector("#productPrice") as HTMLInputElement).value = "";
};

//handle event when user submit the form 
document.querySelector("form")?.addEventListener("submit", (e: Event) => {
  //prevent direct submission after adding fields, and check for form validation
  e.preventDefault()

  //get all field data and trim it
  const name = (document.querySelector("#productName") as HTMLInputElement).value.trim();
  const quantity = parseInt((document.querySelector("#productQuantity") as HTMLInputElement).value.trim());
  const price = parseInt((document.querySelector("#productPrice") as HTMLInputElement).value.trim());

  //define an emtpy string is an error
  let errorMessage = "";


  //check if the name is empty, display error message
  if (!name) {
    errorMessage += "Product name cannot be empty";
  }
  //check if the quantity is NaN and is less than or equal to 0,check for positive number
  if (isNaN(quantity) || quantity <= 0) {
    errorMessage += "Quantity must be a positive number";
  }
  //check if the price is NaN and is less than or equal to 0,check for positive number
  if (isNaN(price) || price <= 0) {
    errorMessage += "Price must be a positive number";
  }

  //get error div through id
  const errorElement = document.querySelector("#error-message") as HTMLElement;
  //check if error message show tha alert message
  if (errorMessage) {
    alert(errorElement.textContent = errorMessage);
  } else {
    errorElement.textContent = "";
    addProducts();  //add element
    clearFormInput(); //clear the form
  }
});

//initially render the table data
displayProducts(productList);
