//Importando a o endereço da API
import { apiConfig } from "./api-config.js";

//Função que vai servir para registrar um novo agendamento dentro da api
export async function schedulesNew({ id, name, when }) {
  try {
    //Fazendo uma requisição para api
    await fetch(`${apiConfig.baseURL}/schedules`, {
      //Setando o método sendo 'POST' o de criação
      method: "POST",
      //Adicionando informações ao cabeçalho
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    //Gatilho para informar que o agendamento foi um sucesso
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    //Disparando o alerta de erro
    alert("Não foi possível realizar sua requisição");
    console.log(error);
  }
}
