import { StyleSheet, Image, Platform } from 'react-native';
import {P} from '@/components/Paragrafo';
import {H1} from '@/components/H1titlepage';
import { CollapsibleGame } from '@/components/CollapsibleGame';
import { ExternalLink } from '@/components/ExternalLink';
import { Template } from '@/components/TemplateGames';

export default function TabTwoScreen() {
  return (
    <Template>
      <H1>Games 2D</H1>
      <P>Alguns Jogos 2D da VVC Estudio.</P>

      <CollapsibleGame title="Stray Mariner">
        <ExternalLink href="https://vvcestudio.com.br/pt/play/straymariner">
          <Image
            source={require('@/assets/images/straymariner.png')}
            style={{width: 80, height: 80}}
          />
          <P>
            Stray Mariner é um jogo estilo jump 'n' run.{' '}
          </P>
          <P>
            Aventura de um Jovem pirata.{' '}
          </P>       
        </ExternalLink>
      </CollapsibleGame>
      
      <CollapsibleGame title="Omelete de Dino">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/omeletededino">
          <Image
              source={require('@/assets/images/logoomeletedino.png')}
              style={{width: 170, height: 80}}
            />
          <P>
            Estudo de desenvolvimento de game apenas com JS e canvas.{' '}
          </P>
          <P>
            Fuja de T-rex e colete ovos de dinosauro para seu omelete.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>

      <CollapsibleGame title="Sereia">
        <ExternalLink href="https://vvcestudio.com.br/pt/play/sereia">
          <Image
              source={require('@/assets/images/sereia.png')}
              style={{width: 90, height: 80}}
            />
          <P>
            Jogo onde você controla uma sereia.{' '}
          </P>
          <P>
            Jogo em JS.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>

      <CollapsibleGame title="Tetris">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/tetris">
          <Image
              source={require('@/assets/images/logotetris1987.png')}
              style={{width: 100, height: 80}}
            />
          <P>
            Estudo de desenvolvimento de game apenas com JS e canvas.{' '}
          </P>
          <P>
            Classico Jogo Tetris.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>
      

      <CollapsibleGame title="Star-Intruder">
        <ExternalLink href="https://vvcestudio.com.br/pt/play/starintruder">
          <Image
              source={require('@/assets/images/star_intruder_play.png')}
              style={{width: 90, height: 80}}
            />
          <P>
            Estudo de desenvolvimento de game apenas com JS e canvas.{' '}
          </P>
          <P>
            Jogo de invasores espaciais.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>

      
      <CollapsibleGame title="Sonic Valente">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/sonic">
          <Image
              source={require('@/assets/images/logosonic.png')}
              style={{width: 200, height: 80}}
            />
          <P>
            Colete os aneis e fuja do Robotinic.{' '}
          </P>
          <P>
            Estudo de desenvolvimento de game apenas com JS e canvas.{' '}
          </P>
        </ExternalLink>
      </CollapsibleGame>


      <CollapsibleGame title="Cobrinha">
        <ExternalLink href="https://vvcestudio.com.br/pt/game/cobrinha">
          <Image
              source={require('@/assets/images/imgcobra.jpg')}
              style={{width: 100, height: 80}}
            />
          <P>
            Estudo de desenvolvimento de game apenas com JS e canvas.{' '}
          </P>
          <P>
            Classico jogo da cobrinha.{' '}
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
