import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/Header";
import { spacingX, spacingY } from "@/constants/theme";

const Statistics = () => {
  return (
    <ScreenWrapper>
      <Header title="Statistique" style={{ marginVertical: spacingY._10 }} />
    </ScreenWrapper>
  );
};

export default Statistics;

const styles = StyleSheet.create({});
