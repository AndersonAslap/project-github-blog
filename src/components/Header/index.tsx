import { HeaderContainer } from "./styles";

import logo from '../../assets/logo.svg';
import headerLeft from '../../assets/header-left.svg';
import headerRight from '../../assets/header-right.svg';

export function Header() {
    return (
        <HeaderContainer>
            <img src={headerLeft} alt=""/>
            <img src={logo} alt=""/>
            <img src={headerRight} alt=""/>
        </HeaderContainer>
    )
}