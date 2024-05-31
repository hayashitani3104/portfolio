import React, { useState } from 'react';

const UserProfile = () => {
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
    <p>プロフィールページ</p>
  );
};

export default UserProfile;
