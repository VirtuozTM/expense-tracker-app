import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { verticalScale } from "@/utils/styling";
import { colors, spacingX, spacingY } from "@/constants/theme";
import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import * as Icons from "phosphor-react-native";
import Button from "@/components/Button";
import { router } from "expo-router";
import { useAuth } from "@/context/authContext";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login: loginUser } = useAuth();

  const handleRegister = () => {
    router.navigate("/(auth)/register");
  };

  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Connexion", "Veuillez remplir tous les champs");
      return;
    }
    setIsLoading(true);
    const res = await loginUser(emailRef.current, passwordRef.current);
    if (!res.success) {
      Alert.alert("Se connecter", res.msg);
    }
    setIsLoading(false);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"800"}>
            Bonjour
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Bienvenue,
          </Typo>
        </View>

        <View style={styles.form}>
          <Typo size={16} color={colors.textLight}>
            Connectez-vous maintenant pour suivre toutes vos dépenses
          </Typo>
          <Input
            placeholder="Saisissez votre adresse électronique"
            onChangeText={(text) => (emailRef.current = text)}
            icon={
              <Icons.At
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            placeholder="Saisissez votre mot de passe"
            onChangeText={(text) => (passwordRef.current = text)}
            icon={
              <Icons.Lock
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Typo size={14} color={colors.text} style={{ alignSelf: "flex-end" }}>
            Mot de passe oublié ?
          </Typo>
          <Button onPress={handleSubmit} loading={isLoading}>
            <Typo fontWeight={"600"} color={colors.black} size={20}>
              Se connecter
            </Typo>
          </Button>
        </View>
        <View style={styles.footer}>
          <Typo size={15}>Vous n'avez pas de compte ?</Typo>
          <Pressable onPress={handleRegister}>
            <Typo color={colors.primary} fontWeight={"700"} size={15}>
              S'inscrire
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
});
