import React from 'react';
import PropTypes from 'prop-types';
import { gradient, secondary } from '../../../theme';
// import Col from '../../atoms/Col';
import StyledRow from './styled';

const calcConsumido = (franquia, consumo) => {
  const multiplicacao = franquia * consumo;
  return (multiplicacao / 100).toFixed(2);
};

const calcDisponivel = (franquia, consumo) => {
  const subtracao = 100 - consumo;
  const val = franquia * subtracao;
  return (val / 100).toFixed(2);
};

const Legenda = props => (
  <StyledRow noWrap {...props} className="legenda">
    <p className="consumido">
      Consumido:&nbsp;
      <strong data-context="dashboard_card_consumo-dados_detail_consumed">
        {calcConsumido(props.franquia, props.consumo)} GB
      </strong>
    </p>
    <p className="disponivel">
      Disponivel:&nbsp;
      <strong data-context="dashboard_card_consumo-dados_detail_available">
        {calcDisponivel(props.franquia, props.consumo)} GB
      </strong>
    </p>
  </StyledRow>
);

// Documentation
Legenda.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  franquia: PropTypes.number,
  consumo: PropTypes.number,
};

Legenda.defaultProps = {
  theme: {
    gradient,
    secondary,
  },
  franquia: 3,
  consumo: 2,
};

export default Legenda;
