//Função que vai ser chamada ao carregar a página
import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data
const selectedDate = document.querySelector("#date");

export function schedulesDay() {
  //Vai buscar na api os agendamentos para carregadr do lado direito da tela
  //Vai carregar os horários disponiveis do lado esquerdo (form/horario futuro e horario que nao esta sendo utilizado)

  //Obtém a data do input
  const date = selectedDate.value;

  //Renderiza as horas disponiveis
  hoursLoad({ date });
}
