import React, {useState} from 'react';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = ({navigation}) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const Logar = () => {
    if (user === 'Vinicius' && password === '123') {
      navigation.navigate('Home');
      setUser('');
      setPassword('');
    } else {
      alert('Usuário ou Senha Incorretos!');
    }
  };

  return (
    <Layout justify="center">
      <Title title="Login" />
      <Input placeholder="Nome" onChangeText={(t) => setUser(t)} value={user} />
      <Input
        placeholder="Senha"
        onChangeText={(t) => setPassword(t)}
        value={password}
      />
      <Button text="Login" mt="20" onPress={Logar} />
    </Layout>
  );
};

export default Login;
