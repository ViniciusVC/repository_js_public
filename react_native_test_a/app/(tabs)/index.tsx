import { StyleSheet, Image, Platform } from 'react-native';
import {P} from '@/components/Paragrafo';
import {H1} from '@/components/H1titlepage';
import { CollapsibleGame } from '@/components/CollapsibleGame';
import { ExternalLink } from '@/components/ExternalLink';
import { Template } from '@/components/TemplateGames';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <Template>
      <H1>Games VVC Estudio</H1>
      <P>Jogos da VVC Estudio.</P>

      <P>Este aplicativo é um estudo de desenvolvimento com React Native.</P>

      <H1></H1>Instale o Node
      <P>1º - Instale o NodeJS:</P>
      <P>$ apt-get install nodejs</P>
      <P>$ apt install npm</P>

      <H1>Iniciar projeto</H1>
      <P>3º - Iniciar um projeto react-native com o expo:</P>
      <P>npx create-expo-app@latest</P>
      <P>What is your app named? ... react_native_test_a</P>
      <P>cd react_native_test_a</P>

      <H1>Rodar projeto</H1>
      <P>npm run android</P>
      <P>npm run web</P>

      <H1>Instale o Expo Go no seu celular.</H1>

      <CollapsibleGame title="Autor">
        
          <Image
              source={require('@/assets/images/eu.png')}
              style={{width: 100, height: 100}}
            />
          <P>
          Meu nome é Vinícius Valente Coutinho,
          </P>
          <P>
          Analista de Sistemas full Stack,
          </P>
          <P>
          Estou a mais de 20 anos na áreas de TI.
          </P>
          <P>
          Experiência em desenvolvimento com NodeJS, React, Nextjs, DotNet, APIs REST;
          </P>
          <P>
          Configuração de CDN Configuração de Apache;Conhecimento sobre Arquitetura de Solução;
          </P>
          <P>
          Banco de dados relacional e NoSQL (Oracle, MySQL, MongoDB, BigData Hadoop).
          </P>
          <P>
          Trabalhei nas gigantes IRB, Globo e Oi.
          </P>
          <P>
          Atuei como líder técnico em vários projeto.
          </P>
        <ExternalLink href="https://vvcestudio.com.br/pt/eu">
          <P>Veja meu currículo aqui.</P>
        </ExternalLink>
      </CollapsibleGame>

    </Template>
  );
}

const styles = StyleSheet.create({
  reactLogo:{
    padding: 5,
    width: 100,
    height: 115,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
