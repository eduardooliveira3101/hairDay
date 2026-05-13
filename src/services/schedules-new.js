import { apiConfig } from "./api-config.js";

export async function schedulesNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    alert("Não foi possível realizar sua requisição");
    console.log(error);
  }
}
