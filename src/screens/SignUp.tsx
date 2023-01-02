import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

export function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg='gray.700' px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Uma mulher e um homem fazendo exercícios"
          resizeMode='contain'
          position='absolute'
        />


        <Center my={24}>
          <LogoSvg />

          <Text color='gray.100' fontSize='sm'>
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color='gray.100' fontFamily='heading' fontSize='xl' mb={6}>
            Crie sua conta
          </Heading>

          <Input
            placeholder='Nome'
            autoCapitalize='sentences'
          />
          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            placeholder='Senha'
            secureTextEntry
          />

          <Button title='Criar e Acessar' />
        </Center>

        <Button title='Voltar para o login' variant='outline' mt={24} onPress={handleGoBack} />
      </VStack>
    </ScrollView>
  );
}