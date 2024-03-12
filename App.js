import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import Pt from './components/Pt.js';
import Mt from './components/Mt.js';
import Qui from './components/Qui.js';
import Bio from './components/Bio.js';
import Filo from './components/Filo.js';
import Soci from './components/Soci.js';
import Hi from './components/Hi.js';
import Fisi from './components/Fisi.js';
import Ing from './components/Ing.js';
import Espa from './components/Espa.js';
import Red from './components/Red.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>ESTUDAMAIS</Text>

        <Pt />
        <Mt />
        <Qui />
        <Bio />
        <Filo />
        <Soci />
        <Hi />
        <Fisi />
        <Ing />
        <Espa />
        <Red />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    backgroundColor: '#007813',
    color: '#fff',
    paddingBottom: 15,
    paddingTop: 10,
  },

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    marginHorizontal: 0,
    backgroundColor: '#f0f0f0',
  },
});
