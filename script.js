function handleTicketChange(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    calculateTotal();
}
function calculateTotal() {
    const firstClsCount = getInputValue('firstCls');
    const economyCount = getInputValue('economy');
    const totalPrice = firstClsCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const vat = Math.round(totalPrice * 0.1);
    document.getElementById('vat-amount').innerText = '$' + vat;
    const grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
//popup
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}