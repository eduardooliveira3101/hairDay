//Importando o formulário
const form = document.querySelector("form");

//Importando o input calendário
const selectedDate = document.querySelector("#date");

//Importação do pacote dayjs
import dayjs from "dayjs";

//Pega a data de referência (hoje)
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Selecionando o input do calendário e setando um valor inicial dele que no caso, (hoje)
selectedDate.value = inputToday;

//Selecionando o input de calendário e setando que, no minimo o agendamento é de hoje para frente
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();
};
