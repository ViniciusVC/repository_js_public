import { StyleSheet, Image, Platform } from 'react-native';
import {P} from '@/components/Paragrafo';
import {H1} from '@/components/H1titlepage';
import { CollapsibleGame } from '@/components/CollapsibleGame';
import { ExternalLink } from '@/components/ExternalLink';
import { Template } from '@/components/TemplateGames';

export default function TabTwoScreen() {
  return (
    <Template>
      <H1>Experimentos</H1>
      <P>Alguns estudos para desenvolvidos Jogos 3D.</P>

      <CollapsibleGame title="Tanque">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/tanque">
          <Image
            source={require('@/assets/images/logophanzerjs.png')}
            style={{width: 140, height: 80}}
          />
          <P>
            Estudo de desenvolvimento de game para Web com a biblioteca PhaserJS.{' '}
          </P>
          <P>
          Controle de um tanque em vista superior.{' '}
          </P>       
        </ExternalLink>
      </CollapsibleGame>
      
      <CollapsibleGame title="Sistema Operacional">
        <ExternalLink href="https://vvcestudio.com.br/pt/play/sistemaoperacional">
          <Image
              source={require('@/assets/images/icon_os.png')}
              style={{width: 140, height: 80}}
            />
          <P>
          Desenvolvimento de simulador de SO.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>

      <CollapsibleGame title="Pokemon">
        <ExternalLink href="https://vvcestudio.com.br/pt/play/pokemon">
          <Image
              source={require('@/assets/images/logo_pokemon.png')}
              style={{width: 200, height: 80}}
            />
          <P>
            UM pequeno estudo com a PokeAPI.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>

      <CollapsibleGame title="Simulador de Ecossistema">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/ecossistema">
          <Image
              source={require('@/assets/images/tetris3dlogo.png')}
              style={{width: 100, height: 80}}
            />
          <P>
          Estudo de desenvolvimento de game apenas com JS e canvas.{' '}
          </P>
          <P>
            Uma simulação de ecossistema. Não é jogavel.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>
      
      <CollapsibleGame title="Escritorio do Valente">
        <ExternalLink href="https://vvcestudio.com.br/pt/play/escritoriodovalente">
          <Image
              source={require('@/assets/images/eu.png')}
              style={{width: 100, height: 80}}
            />
          <P>
            Desenvolvimento de 3D com Three.js.{' '}
          </P>
          <P>
            Estudo de ambiente 3D escaneado{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>
    
      <CollapsibleGame title="MetaIlha">
        <ExternalLink href="https://vvcestudio.com.br/pt/metailha">
          <Image
              source={require('@/assets/images/icometailha.jpg')}
              style={{width: 100, height: 80}}
            />
          <P>
            Desenvolvimento de game 3D com Three.js.{' '}
          </P>
          <P>
            Relache neste belo cenário interativo.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>

      <CollapsibleGame title="Controle O Godzilla">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/controleogodzilla">
          <Image
              source={require('@/assets/images/godzilla1.gif')}
              style={{width: 100, height: 80}}
            />
          <P>
            Brincadeira que fiz pro meu filho em um fim de dia.{' '}
          </P>
          <P>
            Um JS simples que interage com o mouse.{' '}
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
