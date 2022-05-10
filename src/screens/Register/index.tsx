import React, { useState } from 'react';

import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../../components/Form/CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionType,
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelected(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='Preço'
          />
          <TransactionType>
            <TransactionTypeButton
              title='Income'
              type='up'
              onPress={() => handleTransactionTypeSelected('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              title='Outcome'
              type='down'
              onPress={() => handleTransactionTypeSelected('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionType>

          <CategorySelect title='Categoria' />
        </Fields>

        <Button title='Enviar' />
      </Form>
    </Container>
  )
}