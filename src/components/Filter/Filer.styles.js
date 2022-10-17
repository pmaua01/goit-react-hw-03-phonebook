import styled from 'styled-components';

export const FilterLabel = styled.label`
  width: 300px;
  font-size: 20px;
  flex-wrap: wrap;
  display: flex;
  aligin-items: center;
`;

export const FilterInput = styled.input`
  display: flex;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  margin-top: 10px;
  &:hover,
  &:focus {
    outline: 1px solid #00bfff;
    border-color: #00bfff;
  }
`;
