
import React from 'react';

export const atGTM = (modo) => (
    <div>
      <h2>atGTM</h2>
      <p className="p">
        O GTM, não é um componente visual.<br/>
        modo={modo}</p>
      <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    </div>
);

export default atGTM;

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
