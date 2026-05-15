//Importando o formulário
const form = document.querySelector("form");
const clientName = document.querySelector("#client");

import { schedulesNew } from "../../services/schedules-new.js";

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

form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Por favor, informe o nome do cliente");
    }
    //Recuperar o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");

    //Recuperando o horário selecionado
    if (!hourSelected) {
      alert("Selecione a hora");
    }

    const [hour] = hourSelected.innerText.split(":");
    const when = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime();

    await schedulesNew({
      id,
      name,
      when,
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento");
  }
};
