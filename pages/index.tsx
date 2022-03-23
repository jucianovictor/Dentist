import React from 'react';
import Head from 'next/head';
import theme from '../styles/theme';
import Logo from '../assets/logo.svg';
import { Button, SecondaryButton } from '../styles/template/button/style';
import {
  Container,
  FormSection,
  Form,
  InputFormGroup,
  ButtonFormGroup,
  SubTitle,
  ContentSection,
  Title,
  Text,
} from '../styles/pages/index/style';
import LabelledInput from '../components/labelled-input';

const LoginPage: React.FC = () => (
  <>
    <Head>
      <title>Cointent Login</title>
      <meta name="description" content="Cointent Login Page"></meta>
    </Head>
    <Container>
      <ContentSection>
        <img src={Logo} width="400px" height="400px" alt="logo"></img>
        <Title>Cointent</Title>
        <Text>
          <strong>More value for you</strong> and
          <strong> your community</strong>
        </Text>
      </ContentSection>
      <FormSection>
        <Form role='form'>
          <SubTitle>Login</SubTitle>
          <InputFormGroup role='group'>
            <LabelledInput label='Email' type='email' id="email" placeholder="my@email.com" required={true}/>
            <LabelledInput label='Username' type='text' id="username" placeholder="MyAwsomeUsername" required={true}/>
            <LabelledInput label='Password' type='password' id="password" required={true}/>
          </InputFormGroup>
          <ButtonFormGroup>
            <SecondaryButton role="button" themeColor={theme.colors.primary}>Sign Up</SecondaryButton>
            <Button role="button" themeColor={theme.colors.primary}>Login</Button>
          </ButtonFormGroup>
        </Form>
      </FormSection>
    </Container>
  </>
);

export default LoginPage;
