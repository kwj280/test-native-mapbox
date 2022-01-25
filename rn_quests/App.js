import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuestList from './QuestList';

const HOST_SERVER ='https://brave-swan-12.loca.lt'



export default function App() {
  return (
    <View style={styles.container}>
      <QuestList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
