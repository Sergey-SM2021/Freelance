import styled from "styled-components";

export const SearchWarapper = styled.div`
  width: 100%;
  height: 45px;
  background: rgb(238,238,238);
  margin: 10px 0;
`

export const SearchInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  &:focus{
    outline: none;
  }
`

export const SearchFind = styled.img`
  width: 40px;
  margin-left: 10px;
  &:hover{
    cursor: pointer;
  }
`

export const SearchFilter = styled.img`
  width: 40px;
  margin-left: 10px;
  &:hover{
    cursor: pointer;
  }
`

