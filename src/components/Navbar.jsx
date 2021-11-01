import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Container = styled.div`
  height: 60px;
  background-color: #fff;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 15px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Language = styled.span`
  font-size: 1.2rem;
`;
const SearchContainer = styled.div`
  display: flex;
  margin-left: 25px;
  padding: 5px;
  align-items: center;
  border: 0.5px solid black;
  width: auto;
`;
const Input = styled.input`
  border: none;
  :focus {
    outline: none;
  }
`;
const Logo = styled.h1`
  font-weight: 900;
`;
const ItemMenu = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin: auto 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input type='search' name='search' placeholder='search' id='' />
            <SearchIcon style={{ color: 'grey' }}></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shop.</Logo>
        </Center>
        <Right>
          <ItemMenu>Register</ItemMenu>
          <ItemMenu>Sign In</ItemMenu>
          <Badge color='primary' badgeContent={1}>
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
