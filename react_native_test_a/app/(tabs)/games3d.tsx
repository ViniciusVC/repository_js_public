import { StyleSheet, Image, Platform } from 'react-native';
import {P} from '@/components/Paragrafo';
import {H1} from '@/components/H1titlepage';
import { CollapsibleGame } from '@/components/CollapsibleGame';
import { ExternalLink } from '@/components/ExternalLink';
import { Template } from '@/components/TemplateGames';

export default function TabTwoScreen() {
  return (
    <Template>
      <H1>Games 3D</H1>
      <P>Alguns Jogos 3D da VVC Estudio.</P>

      <CollapsibleGame title="Cristal Bot APP">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/cristalbot">
          <Image
            source={require('@/assets/images/logocistalbotmini.png')}
            style={{width: 140, height: 80}}
          />
          <P>
          Jogo Cristal Bot desenvolvido na Unity com C# modelagem 3D no Blender.{' '}
          </P>
          <P>
          Desenvolvi tanto o código quanto a arte do jogo:{' '}
          </P>       
        </ExternalLink>
      </CollapsibleGame>
      
      <CollapsibleGame title="Cristal Bot Web">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/cristalbot/web">
          <Image
              source={require('@/assets/images/logocistalbotmini.png')}
              style={{width: 140, height: 80}}
            />
          <P>
            Jogo Cristal Bot web desenvolvido com Three.js modelagem 3D no Blender.{' '}
          </P>
          <P>
            Desenvolvi tanto o código quanto a arte do jogo.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>

      <CollapsibleGame title="Wolf3D">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/wolfenstein3d">
          <Image
              source={require('@/assets/images/rosto_personagem_2_1.jpg')}
              style={{width: 100, height: 80}}
            />
          <P>
            Desenvolvimento de game 3D com Three.js.{' '}
          </P>
          <P>
            wolfenstein 3d - 1a faze. Jogo em primeira pessoa.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>

      <CollapsibleGame title="Play Timne">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/playtime">
          <Image
              source={require('@/assets/images/logo_playtime.png')}
              style={{width: 100, height: 80}}
            />
          <P>
            Desenvolvimento de game 3D com Three.js.{' '}
          </P>
          <P>
            Play Time - Jogo em primeira pessoa.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>
      
      <CollapsibleGame title="Nave Espacial">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/nave">
          <Image
              source={require('@/assets/images/nave01.jpg')}
              style={{width: 100, height: 80}}
            />
          <P>
            Desenvolvimento de game 3D com Three.js.{' '}
          </P>
          <P>
            Jogo de nave espacial.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>

      <CollapsibleGame title="Tetris3D">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/tetris3d">
          <Image
              source={require('@/assets/images/tetris3dlogo.png')}
              style={{width: 100, height: 80}}
            />
          <P>
            Desenvolvimento de game 3D apenas com JS e canvas.{' '}
          </P>
          <P>
            Classico jogo Tetris.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>

      
      <CollapsibleGame title="Cobrinha 3D">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/cobrinha3d">
          <Image
              source={require('@/assets/images/imgcobra.jpg')}
              style={{width: 100, height: 80}}
            />
          <P>
            Desenvolvimento de game 3D apenas com JS e canvas.{' '}
          </P>
          <P>
            Jogo da cobrinha, versão 3D.{' '}
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
