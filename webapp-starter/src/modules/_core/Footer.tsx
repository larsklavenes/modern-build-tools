import styled, { css } from 'styled-components'

const FooterWrapper = styled.footer(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(4)};
  `
)

const Footer: React.FC = () => {
  return <FooterWrapper>Footer</FooterWrapper>
}

export default Footer
