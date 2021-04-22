
import { FC } from 'react';
import styled from 'styled-components';
import TopNav from '../TopNav/TopNav';
import LeftMenu from '../LeftMenu/LeftMenu';
import CenterContent from '../CenterContent/CenterContent';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
const MainWrapper = styled.div`
display:flex;
width:100%;
height:200em;
background-color:${Colors.backgroundpage};
flex-direction:column;
`;
const Container = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:100%;
`;
const Container1 = styled.div`
display:flex;
justify-content:center;
width:18%;
height:100%;
`;
const Container2 = styled.div`
width:85%;
height:100%;
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
                <Container2><CenterContent /></Container2>
            </Container>

        </MainWrapper>


    );
}
export default MainPage;