import { forwardRef } from "react";
import { styled } from "styled-components";
import { flexCenter } from "../styles/common";

const FormInput = forwardRef(
  ({ label, containerStyle, error, ...inputProps }, ref) => {
    return (
      <>
        <Wrapper style={containerStyle}>
          <Label>{label}</Label>
          <Input {...inputProps} ref={ref} />
        </Wrapper>
        <p
          style={{
            color: "red",
            fontSize: "12px",
            visibility: error ? "visible" : "hidden",
          }}
        >
          {error}
        </p>
      </>
    );
  }
);
export default FormInput;

const Wrapper = styled.div`
  ${flexCenter}
  position: relative;
  margin-bottom: 16px;
`;

const Input = styled.input`
  border: 1px solid #999;
  width: 100%;
  border-radius: 4px;
  height: 48px;
  padding-left: 16px;
  &::placeholder {
    text-align: center;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 16px;
  top: -6px;
  font-size: 12px;
  background-color: #ffffff;
  z-index: 100;
  padding: 0 4px;
`;
