async function fetchParticipacionNacional() {
    const response = await fetch('https://oaemdl.es/onpe_sweb_php/participacion/Nacional');
    const data = await response.json();
    if (data.success) {
        displayParticipacionNacional(data.data);
    } else {
        console.error(data.message);
    }
}

function displayParticipacionNacional(data) {
    const tableBody = document.getElementById('resultados');
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.DPD}</td>
            <td>${item.TV}</td>
            <td>${item.PTV}</td>
            <td>${item.TA}</td>
            <td>${item.PTA}</td>
            <td>${item.EH}</td>
        `;
        tableBody.appendChild(row);
    });
}
fetchParticipacionNacional();
