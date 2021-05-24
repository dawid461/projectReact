
import { FC } from 'react';
import styled from 'styled-components';
import TopNav from '../TopNav/TopNav';
import LeftMenu from '../LeftMenu/LeftMenu';
import CenterContent from '../CenterContent/CenterContent';
import Entities from '../entities/Entities';
import Profile from '../Profile/Profile';
import Workspace from '../Workspace/Workspace';
import Test from '../TestSite/Test';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


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
        <Router>
            <MainWrapper>
                <TopNav />
                <Container>

                    <Container1><LeftMenu /></Container1>
                    <Switch>
                        <Route path="/Entities">
                            <Entities />
                        </Route>
                        <Route path="/Profile">
                            <Profile />
                        </Route>
                        <Route path="/Workspace">
                            <Workspace />
                        </Route>
                        <Route path="/Ecosystem">
                            <Test />
                        </Route>
                        <Route path="/Publications">
                            <Test />
                        </Route>
                        <Route path="/YourNetwork">
                            <Test />
                        </Route>
                        <Route path="/YourPublications">
                            <Test />
                        </Route>
                        <Route path="/People">
                            <Test />
                        </Route>
                        <Route path="/Administration">
                            <Test />
                        </Route>
                        <Route path="/ClientContracts">
                            <Test />
                        </Route>
                        <Route path="/SupilierContracts">
                            <Test />
                        </Route>
                        <Route path="/Corporate">
                            <Test />
                        </Route>
                        <Route path="/GroupNorms">
                            <Test />
                        </Route>
                        <Route path="/Privacy">
                            <Test />
                        </Route>
                        <Route path="/Settings">
                            <Test />
                        </Route>
                        <Route path="/">
                            <Container2><CenterContent /></Container2>
                        </Route>
                    </Switch>

                </Container>
            </MainWrapper>

        </Router>
    );
}
export default MainPage;