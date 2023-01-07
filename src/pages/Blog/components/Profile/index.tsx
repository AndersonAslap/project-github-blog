import { ProfileAside, ProfileContainer, ProfileContent, ProfileImage } from "./styles";

import { FaGithub, FaBuilding, FaUsers } from 'react-icons/fa';

export function Profile() {
    return (
        <ProfileContainer>
            <ProfileContent>
                <ProfileImage src='https://avatars.githubusercontent.com/u/43682613?s=400&u=8b8d038f960148a8396fcfbadc11e00fbee40e7f&v=4' />

                <ProfileAside>
                    <header>
                        <span>Anderson Aslap</span>
                        <a href='#'>GITHUB</a>
                    </header>

                    <p>
                        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                    </p>

                    <footer>
                        <span>
                            <FaGithub />
                            AndersonAslap
                        </span>

                        <span>
                            <FaBuilding />
                            AndersonAslap
                        </span>

                        <span>
                            <FaUsers />
                            AndersonAslap
                        </span>
                    </footer>
                </ProfileAside>
            </ProfileContent>
        </ProfileContainer>
    )
}