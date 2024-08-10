import styled from 'styled-components';

const Load = styled.div`
display: flex;
& svg{
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  animation: infinite rotate 0.3s linear; 
}
& span{
  margin-left: 10px;
  padding-top: 8px;
}
`;

export default Load;
