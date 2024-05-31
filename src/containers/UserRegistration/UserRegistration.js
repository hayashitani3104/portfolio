import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex
} from '@chakra-ui/react';

const UserRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameKana, setFirstNameKana] = useState('');
  const [lastNameKana, setLastNameKana] = useState('');
  // const [birthdate, setBirthdate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email, password, firstName, lastName, firstNameKana, lastNameKana
    };

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      // 登録成功時の処理（例：成功メッセージの表示、リダイレクトなど）
    } catch (error) {
      console.error('Registration failed:', error);
      // エラー処理（例：エラーメッセージの表示）
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>メールアドレス</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} width="300px" />
        </FormControl>

        <FormControl id="password" mt={4} isRequired>
          <FormLabel>パスワード</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} width="300px" />
        </FormControl>

        <Flex mt={4}>
          <FormControl id="lastName" isRequired mr={2}>
            <FormLabel>姓</FormLabel>
            <Input value={lastName} onChange={(e) => setLastName(e.target.value)} width="140px" />
          </FormControl>

          <FormControl id="firstName" isRequired>
            <FormLabel>名</FormLabel>
            <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} width="140px" />
          </FormControl>
        </Flex>

        <Flex mt={4}>
          <FormControl id="lastNameKana" isRequired mr={2}>
            <FormLabel>姓（カナ）</FormLabel>
            <Input value={lastNameKana} onChange={(e) => setLastNameKana(e.target.value)} width="140px" />
          </FormControl>

          <FormControl id="firstNameKana" isRequired>
            <FormLabel>名（カナ）</FormLabel>
            <Input value={firstNameKana} onChange={(e) => setFirstNameKana(e.target.value)} width="140px" />
          </FormControl>
        </Flex>

        <Button mt={4} colorScheme="blue" type="submit">登録</Button>
      </form>
    </Box>
  );
};

export default UserRegistration;
