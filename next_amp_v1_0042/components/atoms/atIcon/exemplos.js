import React from 'react';
import Icon from './index.js';
import Div from '../atDiv/index.js';
import * as icons from './iconfiles';


export const atIcon = (modo) => (
    <div>
      <Div display="vertical">
        <h2>atIcon</h2>
        <Div display="horisontal">
          <div>
            {Object.keys(icons).map((type, index) => {
              return (
                  <div>
                    <Icon type={type} color="#D82482" />
                    <p className="p">código : {'<Icon type="'+type+'" color="#D82482" />'}</p>
                  </div>
                )
            })}
          </div>
          <div>
            {Object.keys(icons).map((type, index) => {
              return (
                  <div>
                    <Icon type={type} color="#000" width="30px" />
                    <p className="p">código : {'<Icon type="'+type+'" color="#000" width="30px"/>'}</p>
                  </div>
                )
            })}
          </div>
          <div>
            {Object.keys(icons).map((type, index) => {
              return (
                  <div>
                    <Icon type={type} colorGradient1="#f8562c" colorGradient2="#e92555" width="40px"/>
                    <p className="p">código : {'<Icon type="'+type+'" width="40px" colorGradient1="#f8562c" colorGradient2="#e92555"/>'}</p>
                  </div>
                )
            })}
          </div>
        </Div>
        <p>modo={modo}</p>
      </Div>
      <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    </div>
);

export default atIcon;

//=================================================================================





// /* eslint-disable */
// // Importar bibliotecas do react.
// import React, { Fragment } from 'react';
// import { storiesOf } from '@storybook/react';

// import { Container } from '../Container';
// import { Line } from '../Line';
// import { Text } from '../Text';
// import { Icon } from '../index';

// import * as icons from './iconfiles';
// import * as DSIcons from './iconfiles/DesignSystemIcons';

// storiesOf('Atoms/Icon', module)
//   .add('Icon types', () => (
//     <Container direction="row" flexwrap="wrap" justify="space-evenly">
//       {Object.keys(icons).map((iconKey, i) => {
//         return i === 0 || i % 10 !== 0 ? (
//           <Container width="135px" justify="space-evenly" padding={[5]}>
//             <Icon key={iconKey} type={iconKey} size={24} fillColor="#D82482" />
//             <Text fontSize={13} align="center" margin={[10, 0, 0, 0]} fontcolor="#909090">
//               {i+1}. {iconKey}
//             </Text>
//           </Container>
//         ) : (
//             <Fragment>
//               <Line width="100%" />
//               <Container width="135px" justify="space-evenly" padding={[5]}>
//                 <Icon key={iconKey} type={iconKey} size={24} fillColor="#D82482" />
//                 <Text fontSize={13} align="center" margin={[10, 0, 0, 0]} fontcolor="#909090">
//                   {i+1}. {iconKey}
//                 </Text>
//               </Container>
//             </Fragment>
//           );
//       })}
//     </Container>
//   ), { info: `All kinds of icons` })
//   .add('Design System Icons', () => (
//     <Container direction="row" flexwrap="wrap" justify="space-evenly">
//       {Object.keys(DSIcons).map((iconKey, i) => {
//         return i === 0 || i % 10 !== 0 ? (
//           <Container width="135px" justify="space-evenly" padding={[5]}>
//             <Icon key={iconKey} type={iconKey} size={24} fillColor="#D82482" />
//             <Text fontSize={13} align="center" margin={[10, 0, 0, 0]} fontcolor="#909090">
//               {i+1}. {iconKey}
//             </Text>
//           </Container>
//         ) : (
//           <Fragment>
//             <Line width="100%" />
//             <Container width="135px" justify="space-evenly" padding={[5]}>
//               <Icon key={iconKey} type={iconKey} size={24} fillColor="#D82482" />
//               <Text fontSize={13} align="center" margin={[10, 0, 0, 0]} fontcolor="#909090">
//                 {i+1}. {iconKey}
//               </Text>
//             </Container>
//           </Fragment>
//         );
//       })}
//     </Container>
//   ), {info: `Design system icons only`});
