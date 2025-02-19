import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import CustomTabs from "@/components/CustomTabs";

const TabsLayout = () => {
  return (
    <Tabs tabBar={CustomTabs} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ tabBarLabel: "Accueil" }} />
      <Tabs.Screen name="statistics" options={{ tabBarLabel: "Statistique" }} />
      <Tabs.Screen name="wallet" options={{ tabBarLabel: "Portefeuille" }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: "Profil" }} />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
