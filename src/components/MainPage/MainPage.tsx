
import { FC } from 'react';
import styled from 'styled-components';
import TopNav from '../TopNav/TopNav';
import LeftMenu from '../LeftMenu/LeftMenu';
import { Colors } from '../../styledHelpers/Colors';
const MainWrapper = styled.div
    `
width:100%;
height:100em;
background-color:${Colors.backgroundpage};
display:flex;
flex-direction:column;
`;
const Container = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:100%;
`;
const Container1 = styled.div`
width:18%;
display:flex;
flex-direction:column;
justify-content:flex-start;
`;
const Container2 = styled.div`
width:85%;
display:flex;
justify-content:flex-start;
flex-direction:column;
`;


const MainPage: FC = () => {

    return (
        <MainWrapper>
            <TopNav />
            <Container>
                <Container1><LeftMenu /></Container1>
                <Container2><h1>przykladowy tekst</h1></Container2>
            </Container>

        </MainWrapper>


    );
}
export default MainPage;