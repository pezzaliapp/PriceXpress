document.getElementById('priceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const pezzi = parseFloat(document.getElementById('pezzi').value);
  const costiVariabili = parseFloat(document.getElementById('costiVariabili').value);
  const costiFissi = parseFloat(document.getElementById('costiFissi').value);
  const margineOperativo = parseFloat(document.getElementById('margineOperativo').value) / 100;

  const totaleCosti = costiVariabili + costiFissi;
  const ricavoDesiderato = totaleCosti / (1 - margineOperativo);
  const prezzoUnitario = ricavoDesiderato / pezzi;

  const risultato = `
    <h2>Risultati</h2>
    <p>Totale costi: € ${totaleCosti.toFixed(2)}</p>
    <p>Ricavo desiderato: € ${ricavoDesiderato.toFixed(2)}</p>
    <p>Prezzo unitario minimo: € ${prezzoUnitario.toFixed(2)}</p>
  `;
  document.getElementById('risultato').innerHTML = risultato;
});