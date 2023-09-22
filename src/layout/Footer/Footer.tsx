import { Wrapper } from "../../styled-components/Wrapper"
import { SocialNetwork } from "../../components/SocialNetwork"
import { StyledFooter } from "./StyledFooter"

export const Footer = () => {
  return (
    <Wrapper>
      <hr />
      <StyledFooter>
        <p>2023 Relume. All right reserved.</p>
        <SocialNetwork />
      </StyledFooter>
    </Wrapper>
  )
}