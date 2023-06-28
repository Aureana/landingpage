import React from 'react'
import Banner from '../Components/Banner/Banner'
import Menu from '../Components/Menu/Menu'
import Depoimentos from '../Components/Depoimentos/Depoimentos'
import { Container_Fluid } from './HomePageStyle'


const HomePage = () => {
    return (
        <Container_Fluid>
            <Menu />
            <Banner />
            <Depoimentos />
        </Container_Fluid>
    )
}

export default HomePage