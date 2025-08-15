import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert("email and password cant be empty");
      return;
    }
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Welcome back</Text>
        <Image
          source={require("../assets/images/user-icon.png")}
          style={styles.icon}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or</Text>

        <TouchableOpacity onPress={() => alert("Forgot password pressed")}>
          <Text style={styles.forgotPassword}>Forgot password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../assets/images/fork-knife.png")}
        style={styles.bottomImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#1b1919ff",
    marginBottom: 15,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa5a5ff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: "100%",
  },
  signInButton: {
    backgroundColor: "#d4a056",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "center",
  },
  signInText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    marginTop: 15,
    fontSize: 14,
    color: "#191212ff",
    textAlign: "center",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#555",
    textDecorationLine: "underline",
    marginVertical: 10,
    textAlign: "center",
  },
  registerButton: {
    backgroundColor: "#d4a056",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "center",
  },
  registerText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
