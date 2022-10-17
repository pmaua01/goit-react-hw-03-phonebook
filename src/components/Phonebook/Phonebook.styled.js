import styled from 'styled-components';

export const FormPhoneBook = styled.form`
  border: 1px solid black;
  width: 400px;
  padding-left: 10px;
`;

export const FormLabel = styled.label`
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  font-size: 25px;
  margin-bottom: 15px;

  }
`;

export const FormInput = styled.input`
  display: flex;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  &:hover,
  &:focus {
    outline: 1px solid #00bfff;
    border-color: #00bfff;
  }
`;

export const FormButton = styled.button`
  margin-bottom: 15px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid black;
  &:active {
    background-color: red;
  }
`;
