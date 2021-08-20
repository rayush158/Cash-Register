const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");
checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  let billMoney = Number(billAmount.value)
  let cashMoney = Number(cashGiven.value)
  if (billMoney > 0) {
    if (cashMoney >= billMoney) {
      const amountToBeReturned = cashMoney - billMoney;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Cash Amount Should be greater than Bill amount!!!");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});
function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
