import { Text, View,Pressable, StyleSheet } from 'react-native'

export default function Pt() {
  return (
    <Pressable style={styles.botao}>
       <View>
        <Text style={styles.pt}>Língua Portuguesa</Text>
       </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  botao:{
    backgroundColor: '#D0FFE3',
    fontWeight: '700',
    marginTop: 10,
    marginRight: 40,
    borderTopRightRadius: 10,
    borderEndEndRadius: 10,
    paddingBottom:10
  },
  pt:{
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10
  }
  
})