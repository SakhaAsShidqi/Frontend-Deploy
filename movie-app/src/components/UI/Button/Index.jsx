import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  background-color: ${(props) =>
    props.$variant === "primary"
      ? "#007bff"
      : props.$variant === "secondary"
      ? "#6c757d"
      : "#343a40"};
  transition: background 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary"
        ? "#0056b3"
        : props.$variant === "secondary"
        ? "#565e64"
        : "#23272b"};
  }
`;

export default Button;
