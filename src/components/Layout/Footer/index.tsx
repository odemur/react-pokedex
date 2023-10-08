import {
  ContainerFooter,
  Copyright,
  FooterContent,
  Medias,
  StyledGlobalContainer,
} from "./styles";
import LogoLinkedin from "../../../assets/logo-linkedin.svg";
import LogoGithub from "../../../assets/logo-github.svg";


export function Footer() {
  return (
    <StyledGlobalContainer>
      <ContainerFooter>
        <FooterContent>
          <Copyright>
            <p>The Pokémon Company</p>
          </Copyright>
          <Medias>
            <a href="https://www.linkedin.com/in/odemur/" target="_blank">
              <img src={LogoLinkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/odemur" target="_blank">
              <img src={LogoGithub} alt="Github" />
            </a>
          </Medias>
        </FooterContent>
      </ContainerFooter>

    </StyledGlobalContainer>
  );
}
