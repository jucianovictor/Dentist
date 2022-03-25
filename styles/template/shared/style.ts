import styled from 'styled-components';

const Span = styled.span<{ color: string }>`
  color: ${props => props.color};
`;

export default Span;
