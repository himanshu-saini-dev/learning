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

    // fix 1: createElement + textContent instead of innerHTML
    const amountSpan = document.createElement("span");
    amountSpan.textContent = `₹${item.amount}`;

    const delSpan = document.createElement("span");
    delSpan.className = "del-btn";
    delSpan.style.color = "red";
    delSpan.style.cursor = "pointer";
    delSpan.textContent = "✕ Delete";

    li.append(amountSpan, delSpan);
    box.append(li);
  });
  paymentsList.append(box);

  localStorage.setItem("fee_payments", JSON.stringify(payments));
}

// form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = Number(amountInput.value);
  if (!amount || amount <= 0) return;

  payments.push({ id: Date.now(), amount });
  render();
  form.reset();
  amountInput.focus();
});

paymentsList.addEventListener("click", (e) => {
  if (!e.target.closest(".del-btn")) return;

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