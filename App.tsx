import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, SwitchComponent, Text, View } from 'react-native';
import Lesson2 from './src/note/l2';

export default function App() {
  const name = "Hai"
  let age = 16;
  let address = "123...";
  const isstudent = true;
  console.log("hello world", name);
  let num = 10;
  if (num >= 0) {
    console.log("d");
  } else console.log("a");
  (num >= 8) ? console.log("hsg"):(
  (num >= 5 && num < 8) ? console.log("hstb") : console.log("hsy")
  );
  for(let i = 1; i <= 20; i++){
    if(i %3 == 0){
      console.log(i + " chia het cho 3");
    }
  }
  switch (num) {
    case 1:
    case 2:
    case 3:
      console.log("X");
      break;
    case 4:
    case 5:
    case 6:
      console.log("h");
      break;
    case 7:
    case 8:
    case 9:
      console.log("t");
      break;
    case 10:
    case 11:
    case 12:
      console.log("d");
      break;
    default: console.log("loai");
      break;



  }
  return (
    <SafeAreaView style={styles.container}>
      <Lesson2 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
