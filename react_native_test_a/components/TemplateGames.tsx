import { ScrollView, Image, View, StyleSheet, Text } from 'react-native';
import { PropsWithChildren} from 'react';
import {P} from '@/components/Paragrafo';
export function Template({children}: PropsWithChildren) {
  return (
    <ScrollView style={styles.templateBody}>
      <View style={styles.header}>
        <Image
        source={require('@/assets/images/fundo_jogos.jpg')}
        style={styles.fundo}/>
        <Image
        source={require('@/assets/images/logo_vvc.png')}
        style={styles.logoVVC}/>  
      </View>

      <View style={styles.templateDiv}>
        {children}
      </View>

      <View style={styles.footer}>
        <Text>https://vvcestudio.com.br/</Text>
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  templateBody: {
    color: "#ffffff",
    backgroundColor: "#8d5119",
  },
  templateDiv: {
    color: "#008080",
    backgroundColor: "#2a1806",
    padding: 10,
    margin: 10,
    borderRadius: 10, // Borda arredondada.

  },
  header: {
    color: "#008080",
    backgroundColor: "#2a1806",
  },
  logoVVC:{
    top: -100,
    width: 100,
  },
  fundo:{
    width: "100%",
    height: "100%",
  },
  footer:{
    width: "100%",
    alignItems: "center",
    backgroundColor: "#2a1806",
  }
});
