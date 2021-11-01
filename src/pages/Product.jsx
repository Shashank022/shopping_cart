import { Announcement } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const Container = styled.div``;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
