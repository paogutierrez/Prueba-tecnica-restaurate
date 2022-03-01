import React from 'react'
import {  Card } from 'react-bootstrap';
import '../styles/footerStyle.css';

const Footer = () => {
  return (
    <div>

<Card className="text-center footer">
  <Card.Body>
    <Card.Title>Hecho con amor</Card.Title>
    <Card.Text>
     By Paola Gutierrez
    </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default Footer