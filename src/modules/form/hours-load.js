//Importando o array que vai conter todos os horarios disponiveis
import { openingHours } from "../../utils/opening-hours.js";
//Importando a biblioteca de data
import dayjs from "dayjs";

export function hoursLoad({ date }) {
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
}
