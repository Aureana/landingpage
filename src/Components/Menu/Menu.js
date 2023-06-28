import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { Main } from './MenuStyle'

function Menu() {
    return (
        <Main>
            <Container>
                <Row>
                    <Col className='logo'>
                        <img width={250} src="/imagens/logo.svg" />
                    </Col>

                    <Col className='informativos'>
                        <button className='informativo'><strong>DÚVIDAS</strong></button>
                        <button className='informativo'><strong>QUEM SOMOS</strong></button>
                        <button className='informativo'><strong>CONTATO</strong></button>
                    </Col>
                    <Col className='redesociais'>
                        <button className='rede'><img width={30} src='/imagens/Logo Whatsapp.svg' /></button>
                        <button className='rede'><img width={30} src='/imagens/Logo Instagram.svg' /></button>
                        <button className='rede'><img width={30} src='/imagens/Logo Facebook.svg' /></button>
                        <button className='rede'><img width={30} src='/imagens/Logo TikTok.svg' /></button>
                    </Col>
                </Row>
            </Container>
        </Main>
    )
}

export default Menu