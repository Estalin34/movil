import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ref, set, onValue } from "firebase/database";
import { db } from "../config/Config";

type Usuario = {
  key: string;
  username: string;
  email: string;
  comentario: string;
};

export default function UsuarioScreen() {
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Guardar información del usuario
  const guardarUsuario = () => {
    if (cedula && nombre && correo && comentario) {
      set(ref(db, `usuarios/${cedula}`), {
        username: nombre,
        email: correo,
        comentario: comentario,
      })
        .then(() => {
          Alert.alert("Mensaje", "Información guardada");
          setCedula("");
          setNombre("");
          setCorreo("");
          setComentario("");
        })
        .catch((error) => {
          Alert.alert("Error", "No se pudo guardar la información");
          console.error("Error al guardar usuario:", error);
        });
    } else {
      Alert.alert("Error", "Por favor completa todos los campos");
    }
  };

  // Leer datos al cargar la pantalla
  useEffect(() => {
    const starCountRef = ref(db, "usuarios/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usuariosArray: Usuario[] = Object.keys(data).map((key) => ({
          key: key,
          username: data[key].username,
          email: data[key].email,
          comentario: data[key].comentario,
        }));
        setUsuarios(usuariosArray);
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <Text style={styles.title}>USUARIOS</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ingresar cédula"
            onChangeText={(texto) => setCedula(texto)}
            value={cedula}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Ingresar nombre"
            onChangeText={(texto) => setNombre(texto)}
            value={nombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingresar correo"
            onChangeText={(texto) => setCorreo(texto)}
            value={correo}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Ingresar comentario"
            onChangeText={(texto) => setComentario(texto)}
            value={comentario}
          />
          <Button title="Guardar" onPress={guardarUsuario} />
        </View>

        <FlatList
          style={styles.flatlist}
          contentContainerStyle={styles.flatlistContent}
          data={usuarios}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>Nombre: {item.username}</Text>
              <Text style={styles.itemText}>Email: {item.email}</Text>
              <Text style={styles.itemText}>Comentario: {item.comentario}</Text>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeed9",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    paddingBottom: 10,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: 400, // Limitar el ancho máximo para asegurar que no se vea excesivamente amplio
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d1d1d1",
  },
  input: {
    marginVertical: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#d1d1d1",
    width: "100%",
  },
  flatlist: {
    flex: 1,
    width: "100%",
    marginTop: 10,
  },
  flatlistContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  itemContainer: {
    backgroundColor: "#ffffff",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d1d1d1",
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
