import styled from 'styled-components';

export const ContactsList = styled.ul`
  font-size: 20px;
  padding: 0;
`;

export const ContactsItem = styled.li`
  width: 350px;
  display: flex;
  margin-bottom: 10px;
  padding:0
  aligin-item: center;
  justify-content: space-between;
`;

export const ContactsButton = styled.button`
  border-radius: 4px;
  background-color: white;
  border: 1px solid black;
  &:active {
    background-color: red;
  }
`;
