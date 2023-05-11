import { Container, Row, Col } from 'react-bootstrap';
import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; 3D Glow</Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer