import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    ...Platform.select({
    ios: { paddingTop: 20 },  
    android: { paddingTop: StatusBar.currentHeight }  })
  },
  box:{
    height: 100,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;