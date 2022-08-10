import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  corpoBotao: {
    margin: 5,
    flexDirection: "row",
  },
  botao: {
    marginVertical: 5,
    marginHorizontal: 5,
  },
  nomeImput: {
    textAlign: "center",
    fontSize: 20,
    margin: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 4,
    borderRadius: 4,
  },
  botaoContinuar: {
    marginVertical: 40,
    marginHorizontal: 80,
    padding: 15,
    backgroundColor: "#4169E1",
    borderRadius: 30,
  },
  textoBotaoContinuar: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  }
});

export default styles;
