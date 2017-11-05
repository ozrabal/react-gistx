import styled from 'styled-components'

export const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`
export const Nav = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        li {
            display: inline-block;
        }
    }
`

export const Container = styled.main`
    //border: 1px solid #cdcdcd;
    font-family: sans-serif;
    font-size: 14px;
    a {
        text-decoration: none;
        color: #999
    }
`
export const Row = styled.div`
    //border: 1px solid #ccc;
    display: flex;
`
export const Column = styled.div`
    width: 50%;
    // background: #bbb;
    border-left: 2px solid #fff;
    &:first-child{
        border: none;
    }
`
export const List = styled.ul`
    list-style: none;
    padding: 0;
    li{
        // background-color: #f5f5f5;
        margin-bottom: 5px;
    }
`

export const Tags = styled.ul`
    list-style: none;
    padding: 0;
    li {
        margin: 0 2px;
        display: inline-block;
        &:first-child {
            margin-left: 0;
        }
    }
`
