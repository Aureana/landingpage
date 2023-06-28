import React from 'react'
import menino from '../../assets/Menino Habilitação Top.png'
import { Main } from './BannerStyle'
import { Container, Row, Col } from 'react-grid-system'

const Banner = () => {
    return (
        <Main>
            <Container>
                <Row>
                    <Col className='banner'>
                        <div className='acelera'>
                            <div className='metodoacelera'>Aumente suas chances de dirigir com o poderoso MÉTODO ACELERA</div>
                            <div className='duas'>Até duas vezes mais eficiente que a concorrência</div>
                        </div>
                        <div className='unica'>
                            <div className='metodounico'><strong>METODOLOGIA ÚNICA</strong></div>
                            <div>ACELERA é o único método do mercado com um plano de desenvolvimento individual para ensinar pessoas a dirigir com segurança e aumentar as chances de aprovação</div>
                            <button><strong>QUERO SABER MAIS</strong></button>
                        </div>
                    </Col>
                    <img className='menino' width='600px' src={menino}></img>
                </Row>
            </Container>
        </Main>
    )
}

export default Banner