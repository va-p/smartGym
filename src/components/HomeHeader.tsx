import { TouchableOpacity } from 'react-native';

import { Heading, HStack, Text, VStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from './UserPhoto';

export function HomeHeader() {
  return (
    <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
      <UserPhoto
        source={{ uri: 'https://github.com/va-p.png' }}
        size={16}
        mr={4}
        alt="Imagem de perfil do usuário"
      />

      <VStack flex={1}>
        <Text color='gray.100' fontSize='md'>
          Olá,
        </Text>

        <Heading color='gray.100' fontSize='md'>
          Vitor
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name='logout'
          size={7}
          color='gray.200'
        />
      </TouchableOpacity>

    </HStack>
  )
}