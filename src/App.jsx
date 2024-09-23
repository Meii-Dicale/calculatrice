import logo from './logo.svg';
import { useState } from 'react';
import ButtonComponent from './Component/ButtonComponent';
import NavBarComponent from './Component/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function App() {
  const [total, setTotal] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);


  const handleChange = (charToAdd) => {
    if (operator == null) {
      // fist number
      if (firstNumber == null) {
        setFirstNumber(charToAdd);
      } else {
        if (charToAdd == ".") {
          if (!firstNumber.toString().includes(".")) {
            setFirstNumber(firstNumber + '' + charToAdd);
          }
        } else {
          setFirstNumber(firstNumber + '' + charToAdd);
        }
        // second number
      }
    }
    else {
      if (secondNumber == null) {
        setSecondNumber(charToAdd);
      } else {
        if (charToAdd == ".") {
          if (!secondNumber.toString().includes(".")) {
            setSecondNumber(secondNumber + '' + charToAdd);
          }
        } else {
          setSecondNumber(secondNumber + '' + charToAdd);
        }
      }
    }
  }


  const calculate = () => {

    switch (operator) {
      case '+':
        setTotal(parseFloat(firstNumber) + parseFloat(secondNumber));
        break;
      case '-':
        setTotal(parseFloat(firstNumber) - parseFloat(secondNumber));
        break;
      case '*':
        setTotal(parseFloat(firstNumber) * parseFloat(secondNumber));
        break;
      case '%':
        if (secondNumber != '0') {
          setTotal(parseFloat(firstNumber) % parseFloat(secondNumber));
         
        } else {
          setTotal( "error");}
        break;
      case '/':
        if (secondNumber != '0') {
          setTotal(parseFloat(firstNumber) / parseFloat(secondNumber));
         
        } else {
          setTotal( "error");
        }
        break;
    }
  }

  return <>
    <Container>
      <NavBarComponent></NavBarComponent>

      <div className='d-flex flex-column align-items-center pt-2'>
        <div className='col-4'>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">Calcul</InputGroup.Text>
            <Form.Control
              placeholder="1+2..."
              aria-label="Total"
              aria-describedby="basic-addon1"
              disabled
              value={total}
            />
          </InputGroup>
        </div>
        {firstNumber + ' ' + operator + '' + secondNumber}
        <div className='col-3 d-flex justify-content-between flex-wrap'>
          <Button variant="outline-danger" className='col-6'>AC</Button>{' '}
          <Button variant="outline-primary" className='col-3' onClick={() => { setOperator("%") }}>%</Button>{' '}
          <Button variant="outline-primary" className='col-3' onClick={() => { setOperator("/") }}>/</Button>{' '}
        </div>
        <div className='col-3 d-flex justify-content-between flex-wrap'>
          <Button variant="outline-secondary" className='col-3' onClick={() => { handleChange(7) }}>7</Button>{' '}
          <Button variant="outline-secondary" className='col-3' onClick={() => { handleChange(8) }}>8</Button>{' '}
          <Button variant="outline-secondary" className='col-3' onClick={() => { handleChange(9) }}>9</Button>{' '}
          <Button variant="outline-primary" className='col-3' onClick={() => { setOperator("*") }}>*</Button>{' '}
        </div>
        <div className='col-3 d-flex justify-content-between flex-wrap'>
          <Button variant="outline-secondary" className='col-3' onClick={() => { handleChange(4) }}>4</Button>{' '}
          <Button variant="outline-secondary" className='col-3' onClick={() => { handleChange(5) }}>5</Button>{' '}
          <Button variant="outline-secondary" className='col-3' onClick={() => { handleChange(6) }}>6</Button>{' '}
          <Button variant="outline-primary" className='col-3' onClick={() => { setOperator("-") }}>-</Button>{' '}
        </div>
        <div className='col-3 d-flex justify-content-between flex-wrap'>
          <Button variant="outline-secondary" className='col-3' onClick={() => { handleChange(1) }}>1</Button>{' '}
          <Button variant="outline-secondary" className='col-3' onClick={() => { handleChange(2) }}>2</Button>{' '}
          <Button variant="outline-secondary" className='col-3' onClick={() => { handleChange(3) }}>3</Button>{' '}
          <Button variant="outline-primary" className='col-3' onClick={() => { setOperator("+") }}>+</Button>{' '}
        </div>
        <div className='col-3 d-flex justify-content-between flex-wrap'>

          <Button variant="outline-secondary" className='col-3' onClick={() => { handleChange(0) }}>0</Button>{' '}
          <Button variant="outline-danger" className='col-3'>delete</Button>{' '}
          <Button variant="outline-primary" className='col-3' onClick={() => { handleChange(".") }}>.</Button>{' '}
          <Button variant="outline-success" className='col-3' onClick={calculate}>=</Button>{' '}
        </div>
      </div>


    </Container>

  </>;





}

export default App;
