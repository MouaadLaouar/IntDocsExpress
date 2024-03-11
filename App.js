import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import RootNavigation from "./src/Navigations/index"

export default function App() {
  return (
    <SafeAreaView style={ styles.SafeArea }>
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
});
