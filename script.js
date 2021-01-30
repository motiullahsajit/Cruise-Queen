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
    sumOfTotal();
}
//calculating total function
function sumOfTotal() {
    const firstClsCount = getInputValue('firstCls');
    const economyCount = getInputValue('economy');
    const totalPrice = firstClsCount * 150 + economyCount * 100;
    document.getElementById('subTotal').innerText = '$' + totalPrice;
    const vat = Math.round(totalPrice * 0.1);
    document.getElementById('vat-amount').innerText = '$' + vat;
    const grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}
//collecting input value function
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
//popup
function togglePopup() {
    document.getElementById("popupId").classList.toggle("active");
    document.getElementById('firstCls-count').value = 0;
    document.getElementById('economy-count').value = 0;
    document.getElementById('subTotal').innerText = '$ 0';
    document.getElementById('vat-amount').innerText = '$ 0';
    document.getElementById('grand-total').innerText = '$ 0';
}
