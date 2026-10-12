const form = document.querySelector("#fee-form");
const amountInput = document.querySelector("#amount-input");
const totalEl = document.querySelector("#total");
const paymentsList = document.querySelector("#payments");
const resetBtn = document.querySelector("#reset-btn");

let payments = JSON.parse(localStorage.getItem("fee_payments")) ?? [];

function render() {
  const totalAmount = payments.reduce((sum, item) => sum + item.amount, 0);
  totalEl.textContent = `Total: ₹${totalAmount}`;

  paymentsList.replaceChildren();

  const box = document.createDocumentFragment();
  payments.forEach((item) => {
    const li = document.createElement("li");
    li.dataset.id = item.id;
    li.innerHTML = `<span>₹${item.amount}</span> <span class="del-btn">✕ Click to delete</span>`;
    box.append(li);
  });
  paymentsList.append(box);

  localStorage.setItem("fee_payments", JSON.stringify(payments));
}
console.log({ form, resetBtn, paymentsList, amountInput, totalEl });
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = Number(amountInput.value);

  if (!amount || amount <= 0) return;

  const newPayment = {
    id: Date.now(),
    amount: amount,
  };
  payments.push(newPayment);
  render();

  form.reset();
  amountInput.focus();
});

paymentsList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const idToDelete = Number(li.dataset.id);

  payments = payments.filter((item) => item.id !== idToDelete);

  render();
});

resetBtn.addEventListener("click", () => {
  payments = [];
  render();
});

render();
