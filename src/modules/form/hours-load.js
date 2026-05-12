//Importando o array que vai conter todos os horarios disponiveis
import { openingHours } from "../../utils/opening-hours.js";
//Importando a biblioteca de data
import dayjs from "dayjs";
import { hoursClick } from "./hours-click.js";

const hours = document.querySelector("#hours");

export function hoursLoad({ date }) {
  hours.innerHTML = "";
  const opening = openingHours.map((hour) => {
    //Recuperar somente a hora
    const [scheduleHour] = hour.split(":");

    //Adicionando a hora na data e verificar se está no passado - Colocando is na frente da variavel indica ser um boolean
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
    console.log(scheduleHour, isHourPast);

    //Retornando se o horário está disponível ou não
    return {
      hour,
      available: isHourPast,
    };
  });

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "08:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }
    hours.append(li);
  });

  //Adicionando evento de click em horários disponíveis
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
