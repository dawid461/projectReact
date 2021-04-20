import { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';

/*-------------style-for-all-elements------------*/
const Wrapper = styled.div`
background-color:#ffffff;
display: flex;
width:100%;
margin:4px; 
font-size: ${fontSize[14]};
`;
/*-------------Item1-------------------------*/
const LogoWithExtendedMenu = styled.div`
display:flex;
flex-direction:row;
width:30%;
`;

const Logo = styled.img`
    width:${imageSize[13]};
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
    width:95%;
    height:95%;
    border:none;
    outline-style:none;
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

/*-------------Item3-------------------------*/
const ThreeIcons = styled.div`
display:flex;
flex-direction:row;
width:30%;
`;
const ThreeIconsDiv = styled.div`
display:flex;
justify-content:flex-end;
width:100%;

`;
const Icon1 = styled.img`

`;
const Icon2 = styled.img`

`;
const Icon3 = styled.img`

`;
const BackgroundIcons = styled.div`
display:flex;
border:2px solid ${Colors.lightgrey};
border-radius:20em 20em;
background:${Colors.lightgrey};
margin:2px;
`;
/*-------------END-------------------------*/

const TopNav: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    return (
        <Wrapper>


            <LogoWithExtendedMenu>
                <LogoA href="#"><Logo src="./media/icons/logo.png" alt="logo-site" /></LogoA>
                <ExtendedMenuLogo src="./media/icons/house2.svg" alt="house-menu-img" />
                <span>Home</span>
                <ExtendedMenu>
                    <div>
                        <div ref={wrapperRef}>
                            <div onClick={toggleDropdown}>
                                <ExtendedMenuDropDownImg src="./media/icons/arrow-down.svg" />
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

            <ThreeIcons>
                <ThreeIconsDiv>
                    <Icon1 src="./media/icons/house.svg" />
                    <BackgroundIcons>
                        <Icon2 src="./media/icons/comments.svg" />
                    </BackgroundIcons>
                    <BackgroundIcons>
                        <Icon3 src="./media/icons/bell.svg" />
                    </BackgroundIcons>

                </ThreeIconsDiv>
            </ThreeIcons>
        </Wrapper>
    );

}
export default TopNav;

