import api from "./api";

  export async function criarCadastro(imagem, nome, sobreNome, cpf, telefone) {
    try {
        await api.post(`/cadastro`, {
            imagem: imagem,
            nome: nome,
            sobreNome, sobreNome,
            cpf: cpf,
            telefone: telefone
        });
        return "sucesso"
    }
    catch (error) {
        console.log(error);
        return error;
    } 
  }