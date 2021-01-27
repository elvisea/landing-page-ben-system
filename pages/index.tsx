import { useState, FormEvent } from 'react';
import { Flex, Button, Text } from '@chakra-ui/core'
import Input from '../components/Input'
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();

    axios.post('/api/subscribe', { email, nome, sobrenome, telefone });
  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%" 
        maxW="400px"
      >
        <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
          Envie seu Orçamento e entraremos em contato o mais rápido possível!
        </Text>

        <Input
          placeholder="E-mail"
          marginTop={2}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Nome"
          marginTop={2}
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <Input
          placeholder="Sobrenome"
          marginTop={2}
          value={sobrenome}
          onChange={e => setSobrenome(e.target.value)}
        />

        <Input
          placeholder="Telefone"
          marginTop={2}
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          ENVIAR
        </Button>
      </Flex>
    </Flex>
  )
}