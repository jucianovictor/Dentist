import styled from 'styled-components';
import mediaSizes from '../../utils/media-sizes';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
`;

const ContentSection = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: ${props => props.theme.colors.background.value};
  color: ${props => props.theme.colors.background.contrast};
  display: grid;
  grid-template-rows: 500px 100px 200px;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;

  @media(max-width: ${mediaSizes.large}px) {
    display: none;
  }
`;

const FormSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.primary.value};
  color: ${props => props.theme.colors.primary.contrast};
  display: grid;
`;

const Form = styled.form`
  width: 90%;
  min-width: ${mediaSizes.extraSmall - 20}px;
  max-width: 490px;
  height: 80%;
  max-height: 560px;
  min-height: 520px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: ${props => props.theme.colors.background.value};
  color: ${props => props.theme.colors.background.contrast};
  align-self: center;
  justify-self: center;
  border-radius: 1rem;
`;

const Title = styled.h1`
  align-self: center;
  justify-self: center;
  font-size: 50px;
  color: ${props => props.theme.colors.primary.value};
`;

const SubTitle = styled.h2`
  align-self: center;
  justify-self: center;
  font-size: 35px;
  color: ${props => props.theme.colors.primary.value};
`;

const Text = styled.h3`
  text-align: center;
  align-self: center;
  justify-self: center;
  font-size: 26px;
  color: ${props => props.theme.colors.primary.value};
`;

const InputFormGroup = styled.div`
  width: 80%;
  height: min-content;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 15px;
  justify-self: center;
  align-self: center;
  align-content: center;
`;

const ButtonFormGroup = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  padding: 0px 50px;
  align-items: center;
`;

export {
  Container,
  FormSection,
  ContentSection,
  Form,
  InputFormGroup,
  ButtonFormGroup,
  Title,
  SubTitle,
  Text,
};
