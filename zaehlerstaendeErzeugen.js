let counterIndex = 0;

function addCounter() {
    counterIndex++;
    const countersDiv = document.getElementById("counters");
    const newCounterDiv = document.createElement("div");

    newCounterDiv.innerHTML = `
        <label for="counterNumber${counterIndex}">Zählernummer ${counterIndex}:</label>
        <input type="text" id="counterNumber${counterIndex}" required><br>
        
        <label for="counterType${counterIndex}">Zählertyp ${counterIndex}:</label>
        <input type="text" id="counterType${counterIndex}" required><br>
        
        <label for="counterValue${counterIndex}">Zählerstand ${counterIndex}:</label>
        <input type="number" id="counterValue${counterIndex}" required><br>
    `;

    countersDiv.appendChild(newCounterDiv);
}

function removeCounter() {
    if (counterIndex > 1) {
        const countersDiv = document.getElementById("counters");
        countersDiv.removeChild(countersDiv.lastChild);
        counterIndex--;
    }
}
function logout() {
    // Hier könnten Sie den Benutzer ausloggen und zur Login-Seite weiterleiten
    window.location.href = "login.html";
}
const counterList = document.getElementById("counterList");
    counterList.innerHTML = "";

    for (let i = 0; i < counterData.length; i++) {
        const data = counterData[i];
        counterList.innerHTML += `<p>Zählernummer ${i + 1}: ${data.counterNumber}, Zählertyp ${i + 1}: ${data.counterType}, Zählerstand ${i + 1}: ${data.counterValue}</p>`;
    }

    // Formular leeren
    for (let i = 1; i <= counterIndex; i++) {
        document.getElementById(`counterNumber${i}`).value = "";
        document.getElementById(`counterType${i}`).value = "";
        document.getElementById(`counterValue${i}`).value = "";
    }