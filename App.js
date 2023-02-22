import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Header from './src/components/Header';
import { Colors } from './src/global/styles';
import Providers from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Providers />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
});
