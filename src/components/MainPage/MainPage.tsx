
import { FC } from 'react';
import styled from "styled-components";
import TopNav from "../TopNav/TopNav";
const Wrapper = styled.div`
background-color:#000000;
`;
const MainPage: FC = () => {

    return (
        <Wrapper>
            <TopNav />

        </Wrapper>
    );
}
export default MainPage;