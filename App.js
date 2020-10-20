import * as React from 'react';
import { Text, View,  } from 'react-native';
import { Platform, StatusBar, StyleSheet } from "react-native";
import Box from './Box';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Box children="#1"/>
      <Box children="#2" />
      <Box children="#3" />
    </View>
  );
}

