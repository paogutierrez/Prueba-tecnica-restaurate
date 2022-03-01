import React from "react";
import { Button, Container, Form, } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/stylesLogin.css';
import {useForm} from '../hooks/useForm'
import { useDispatch } from "react-redux";
import { loginEmailPassword, loginGoogle} from '../actions/actionLogin'

const Login = () => {

  const dispatch = useDispatch()

  const [values, handleInputChange] = useForm({ 
    email:'',
    password:''
  })

  const {email, password}= values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password))
  }

  const handleGoogle = () => {
    dispatch(loginGoogle());
  }


  return (
    <div className="container1">
        <h4>Iniciar Sesion</h4>
    <Form className="formulario" onSubmit={handleLogin}>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className="color"></Form.Label>
        <Form.Control
          className="input1"
          type="email"
          placeholder="Ingrese su e-mail"
          name='email'
          value={email}
          onChange={handleInputChange}
         
          
        />
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label className="color"></Form.Label>
        <Form.Control
          className="input1"
          type="password"
          placeholder="Ingrese su contraseña"
          name='password'
          value={password}
          onChange={handleInputChange}
          autocomplete="on"
           
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <p className="color">¿Aun no estas registrado? </p>
        <Link className="color1" to="/Registro">
          Registrate
        </Link>
      </Form.Group>

      <Container className="auth__social-networks">
        <Container 
        className="google-btn" 
        
        >
          <Container className="google-icon-wrapper" >
         <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
              onClick={handleGoogle}
            />
          </Container>
        </Container>
      </Container>
      <Button variant="primary" type="submit" className="botonLogin" >
        Ingresar
      </Button>
    </Form>
    <img className="plato" src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1645947618/pexels-lisa-fotios-1279330_np4qrd.jpg"alt="platos"></img>
  </div>
  );
};

export default Login;
