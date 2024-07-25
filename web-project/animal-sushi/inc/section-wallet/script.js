document.getElementById('add-credit').addEventListener('click', function() {
    const amount = prompt('¿Cuánto crédito quieres agregar?');
    if (amount) {
        updateBalance(parseFloat(amount));
        addTransaction('Crédito agregado', amount);
    }
});

document.getElementById('use-credit').addEventListener('click', function() {
    const amount = prompt('¿Cuánto crédito quieres usar?');
    if (amount) {
        updateBalance(-parseFloat(amount));
        addTransaction('Crédito usado', amount);
    }
});

document.getElementById('redeem-points').addEventListener('click', function() {
    const points = prompt('¿Cuántos puntos quieres canjear?');
    if (points) {
        updatePoints(-parseInt(points));
        addPointsTransaction('Puntos canjeados', points);
    }
});

function updateBalance(amount) {
    const balanceElement = document.getElementById('balance');
    let currentBalance = parseFloat(balanceElement.innerText.replace('$', ''));
    currentBalance += amount;
    balanceElement.innerText = `$${currentBalance.toFixed(2)}`;
}

function addTransaction(type, amount) {
    const transactionList = document.getElementById('transaction-list');
    const transactionItem = document.createElement('li');
    transactionItem.innerHTML += `<p>${type}:</p> <p>$${parseFloat(amount).toFixed(2)}</p>`;
    // if (transactionList.children[0].innerText === 'No hay transacciones recientes') {
    //     transactionList.innerHTML = '';
    // }
    transactionList.appendChild(transactionItem);
}

function updatePoints(points) {
    const pointsElement = document.getElementById('points');
    let currentPoints = parseInt(pointsElement.innerText);
    currentPoints += points;
    pointsElement.innerText = currentPoints;
}

function addPointsTransaction(type, points) {
    const pointsList = document.getElementById('transaction-list');
    const pointsItem = document.createElement('li');
    pointsItem.innerHTML = `<p>${type}:</p> <p>${parseInt(points)} puntos</p>`;
    pointsList.appendChild(pointsItem);
}
