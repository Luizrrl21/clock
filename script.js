function updateTime() {
  let tempo = new Date();

  let listaMeses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  let dia = tempo.getDate();
  let mes = tempo.getMonth();
  let ano = tempo.getFullYear();

  mes = listaMeses[mes];

  let hora = tempo.getHours();
  let minuto = tempo.getMinutes();
  let segundos = tempo.getSeconds();

  document.getElementById("dia").innerText = dia;
  document.getElementById("mes").innerText = mes;
  document.getElementById("ano").innerText = ano;

  document.getElementById("horas").innerText = hora;
  document.getElementById("minutos").innerText = minuto;
  document.getElementById("segundos").innerText = segundos;
}

function initiTime() {
  setInterval(updateTime, 1000);
}
