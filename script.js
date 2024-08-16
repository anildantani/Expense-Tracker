const expenseForm = document.getElementById("expense-form");

const expenseList = document.getElementById("expense-list");

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;

  if (description && category && amount != null) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${description}</td> <td>${category}</td> <td>${amount}</td>`;
    expenseList.appendChild(newRow);
    document.getElementById("description").value = " ";
    document.getElementById("category").value = " ";
    document.getElementById("amount").value = " ";
  } else {
    alert("Please fill all the Details!!");
  }
});
