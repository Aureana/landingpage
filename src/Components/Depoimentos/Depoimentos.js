import { Container, Row, Col } from 'react-grid-system';
import React from 'react'

function Depoimentos() {
    return (
        <Container fluid>
            <Row>
                <Col sm={4}>
                    <h2>PRA VOCÊ QUE SONHA EM DIRIGIR</h2>
                    <video control width={100} height={250}></video>
                    <p><strong>Messias</strong></p>
                    <p>Aluno Abolição</p>
                    <p>"A equipe é muito maravilhosa, é muito boa..."</p>
                    <img src="/imagens/Estrela.svg" />
                </Col>
                <Col sm={4}>
                    <h2>PRA VOCÊ QUE TEM MEDO</h2>
                    <video control width={100} height={250}></video>
                    <p><strong>Bia Vedovato</strong></p>
                    <p>Aluno / Atriz Globo</p>
                    <p>"O instrutor ajudou a acabar com a minha insegurança, com o meu medo..."</p>
                </Col>
                <Col sm={4}>
                    <h2>PRA VOCÊ QUE JÁ REPROVOU</h2>
                    <video control width={100} height={250}></video>
                    <p><strong>Karina</strong></p>
                    <p>Aluna Abolição</p>
                    <p>"Reprovada 5 vezes em outra autoescola, hoje estou habilitada graças ao Grupo Stop."</p>
                </Col>
            </Row>
        </Container>

    )
}

export default Depoimentos





