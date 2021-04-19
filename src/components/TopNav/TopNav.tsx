import { FC } from 'react';
import styled from "styled-components";
import useDropdown from 'react-dropdown-hook';
import { sortAndDeduplicateDiagnostics } from 'typescript';

/*-------------style-for-all-elements------------*/
const Wrapper = styled.div`
background-color:#ffffff;
display: flex;
width:100%;
margin:4px;
`;

/*-------------Item1-------------------------*/
const LogoWithExtendedMenu = styled.div`
display:flex;
flex-direction:row;
width:30%;
`;

const Logo = styled.img`
    width:2em;
`;
const LogoA = styled.a`
    
`;
const ExtendedMenuLogo = styled.img`

`;
const ExtendedMenu = styled.div`

`;
const ExtendedMenuDropDownImg = styled.img`

`;
const ExtendedMenuCloseImg = styled.img`
    width:1em
`;
/*-------------END-------------------------*/

/*-------------Item2-------------------------*/
const Search = styled.div`
display:flex;
flex-direction:row;

border:2px solid grey;
width:40%;
`;
const SearchInputDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:94%
`;
const SearchInput = styled.input`
    border:none;
    text-align:center;
`;
const SearchLogoDiv = styled.div`
display:flex;
align-items:center;
width:6%;
margin:2px;
`;
const SearchLogo = styled.img`
width:2em;
height:1.5em

`;

/*-------------END-------------------------*/

const TopNav: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    return (
        <Wrapper>


            <LogoWithExtendedMenu>
                <LogoA href="#"><Logo src="./media/icons/logo.png" alt="logo-site" /></LogoA>
                <ExtendedMenuLogo src="./media/icons/house2.png" alt="house-menu-img" />
                <span>Home</span>
                <ExtendedMenu>
                    <div>
                        <div ref={wrapperRef}>
                            <div onClick={toggleDropdown}>
                                <ExtendedMenuDropDownImg src="./media/icons/arrow-down.png" />
                            </div>
                            {dropdownOpen &&
                                <>
                                    {/*Dropdown items */
                                        <ul>
                                            <li>Pozycja 1</li>
                                            <li>Pozycja 2</li>
                                            <li>Pozycja 3</li>
                                            <li>Pozycja 4</li>
                                        </ul>

                                    }
                                    <div onClick={closeDropdown}><ExtendedMenuCloseImg src="./media/icons/close-button.png" /></div>
                                </>

                            }
                        </div>
                    </div></ExtendedMenu>
            </LogoWithExtendedMenu>


            <Search>

                <SearchInputDiv>
                    <SearchInput type="text" placeholder="Search Legalcluster" />
                </SearchInputDiv>
                <SearchLogoDiv>
                    <SearchLogo src="./media/icons/search.png" />
                </SearchLogoDiv>


            </Search>
        </Wrapper>
    );

}
export default TopNav;

