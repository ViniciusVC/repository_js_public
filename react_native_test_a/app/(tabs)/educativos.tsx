import { StyleSheet, Image, Platform } from 'react-native';
import {P} from '@/components/Paragrafo';
import {H1} from '@/components/H1titlepage';
import { CollapsibleGame } from '@/components/CollapsibleGame';
import { ExternalLink } from '@/components/ExternalLink';
import { Template } from '@/components/TemplateGames';

export default function TabTwoScreen() {
  return (
    <Template>
      <H1>Educativo</H1>
      <P>Jogos educativo da VVC Estudio.</P>

      <CollapsibleGame title="Letras">
        <ExternalLink href="https://vvcestudio.com.br/pt/play/letras">
          <Image
            source={require('@/assets/images/logo_letras.jpg')}
            style={{width: 140, height: 80}}
          />
          <P>
          APP educativo para auxiliar o aprendizado da leitura.{' '}
          </P>
          <P>
          Instale fonemas (sóns) na mente do pequeno.{' '}
          </P>       
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
