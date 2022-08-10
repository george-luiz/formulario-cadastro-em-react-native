import React, { useRef } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import { useState } from "react";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import api from "../../services/api";
import { criarCadastro } from "../../services/criarRepositorios";
import { TextInputMask } from "react-native-masked-text";
import styles from "./style";

export default function Cadastro() {
  const [imageUri, setImageUri] = useState();
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");
  const cpfRef = useRef(null);
  const telRef = useRef(null);
  const reg = /\d{1}/g;


/*   function Busca(){
    api.get("/cadastro").then(
        response => {
            console.log(response.data);
        }
    ).catch(erro => {
        console.log(erro);
    });
  } */

  async function criar() {
    const resultado = await criarCadastro(
        imageUri,
        nome,
        sobreNome,
        cpf,
        telefone
    )

    if(resultado === "sucesso"){
        Alert.alert("Repositorios criado!")
    }
    else {
        Alert.alert("Erro ao criar");
    }
  }

  const obterPermissao = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert("Você precisa dar a permissão");
    }
  };

  const obterImagemCamera = async () => {
    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  const obterImagemGaleria = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  useEffect(() => {
    obterPermissao();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.imagem} />

        <View style={styles.corpoBotao}>
          <TouchableOpacity
            onPress={() => {
              obterImagemGaleria();
            }}
            style={styles.botao}
          >
            <Entypo name="images" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              obterImagemCamera();
            }}
            style={styles.botao}
          >
            <MaterialCommunityIcons
              name="camera-plus"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.nomeImput}>Nome:</Text>
      <TextInput
        placeholder="Insira seu nome"
        maxLength={15}
        value={nome.replace(reg, "").replace(".", "").replace(",", "")}
        /* value={nome.replace("/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/", "")} */
        onChangeText={(e) => {
          setNome(e);
        }}
        style={styles.input}
      />
      <Text style={styles.nomeImput}>CPF:</Text>
      <TextInputMask
        placeholder="999.999.999-99"
        type="cpf"
        ref={cpfRef}
        value={cpf}
        onChangeText={(e) => {
          setCPF(e);
        }}
        style={styles.input}
      />
      <Text style={styles.nomeImput}>Celular:</Text>
      <TextInputMask
        placeholder="(99)99999-9999"
        type="cel-phone"
        options={{
            maskType: "BRL",
            withDDD: "true",
            dddMask: "(99) "
        }}
        ref={telRef}
        value={telefone}
        onChangeText={(e) => {
          setTelefone(e);
        }}
        style={styles.input}
      />
      <View >
        <TouchableOpacity
        style={styles.botaoContinuar}
        onPress={() => {
            const cpfIsvalid = cpfRef?.current.isValid();
            const telIsvalid = telRef?.current.isValid();
            if(nome.trim() === ""){
                return alert(`nome não pode ser vazio!`);
            }

            if(!cpfIsvalid){
                return Alert.alert(`CPF invalido!`);
            }

            if(telefone.length <= 14) { 
                if(!telIsvalid){
                    return Alert.alert(`Telfone invalido!`);
                }
                return alert(`Telfone invalido!`);
            }

            criar();
        }}>
            <Text style={styles.textoBotaoContinuar}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
