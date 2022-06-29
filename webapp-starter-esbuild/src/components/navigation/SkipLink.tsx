import MuiLink, { LinkProps } from '@mui/material/Link'
import styled, { css } from 'styled-components'

export type SkipLinkProps = LinkProps

const Link = styled(MuiLink)(
  ({ theme }) => css`
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);

    &:active,
    &:focus {
      clip: auto;
      width: auto;
      height: auto;
      display: block;
      z-index: 100000;
      text-decoration: none;
      background-color: ${theme.palette.background.paper};
      top: ${theme.spacing(1)};
      left: ${theme.spacing(1)};
      padding: ${theme.spacing(2)};
    }
  `
)

/**
 * Hidden link which appears when tabbed to.
 * Used to skip past repetetive page content
 */
const SkipLink: React.FC<LinkProps> = ({ children, ...props }) => (
  <Link {...props}>{children}</Link>
)

export default SkipLink
