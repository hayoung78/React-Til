import { css } from "styled-components";
import styled from "styled-components";

const TDButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
  );
};

export default TDButton;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.whithe};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
  "primary-text": css`
    background: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  `,
};

const sizeCSS = {
  small: css`
    width: 25%;
    aspect-ratio: 8 / 1;
  `,
  medium: css`
    width: 50%;
    aspect-ratio: 8 / 1;
  `,
  full: css`
    width: 100%;
    aspect-ratio: 8 / 1;
  `,
};

const shapeCSS = {
  default: css``,
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
    ${({ shape }) => shapeCSS[shape]}
    cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.7;
    scale: calc(1.3);
  }
`;
