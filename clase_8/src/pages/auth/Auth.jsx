import React from 'react';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../utils/validators';

import './auth.css';

const Auth = () => {
  return (
    <>
      <Card className="authentication">
        <h2>Login</h2>
        <form>
          <Input
            type="text"
            placeholder="LALALALALLALA"
            element="input"
            id="nombre"
            label="Nombre"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Campo Obligatorio PAPU!"
          />
          <Input
            type="email"
            element="input"
            id="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Ingresar un email!!!! NO ES TAN DIFICIL"
          />
          <Input
            type="password"
            element="input"
            id="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Minimo 8 caracteres!!!! 😤 "
          />
          <Button>Login</Button>
        </form>
      </Card>
    </>
  );
};

export default Auth;
