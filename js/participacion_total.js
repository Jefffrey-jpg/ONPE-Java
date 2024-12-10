async function fetchParticipacionExtranjero() {
    const response = await fetch('https://oaemdl.es/onpe_sweb_php/participacion/Extranjero');
    const data = await response.json();
    if (data.success) {
        mostrarParticipacionExtranjero(data.data);
    } else {
        console.error(data.message);
    }
}

function mostrarParticipacionExtranjero(data) {
    const tableBody = document.getElementById('resultadosExtranjero');
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

fetchParticipacionExtranjero();