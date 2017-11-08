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
            padding: 5px;
        }
    }
`

export const Container = styled.main`
    font-family: sans-serif;
    font-size: 14px;
    a {
        text-decoration: none;
        color: #999
    }
`
export const Row = styled.div`
    display: flex;
`
export const Column = styled.div`
    width: 50%;
    border-left: 2px solid #fff;
    &:first-child{
        border: none;
    }
`
export const Header = styled.div`
    background-color: ${props => props.theme.headerBg};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: ${props => props.theme.borderRadius};

`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    li{
        margin-bottom: 5px;
    }
`
export const Tag = styled.div`
    background-color: ${props => props.theme.tagBtnBg};
    border: 1px solid ${props => props.theme.tagBtnBorderColor};
    border-radius: ${props => props.theme.tagBtnBorderRadius};
    color: ${props => props.theme.tagBtnTextColor};
    padding: 1px 2px;
    font-size: 12px;
    &:hover{
        color: ${props => props.theme.tagBtnHoverTextColor};
        background-color: ${props => props.theme.tagBtnHoverBg};
    }
    button {
        border: none;
        background-color: transparent;
        color: inherit;
        line-height: 1;
        :focus{
            outline: none;
            color: #000000;
        }
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
export const Time = styled.time`
    font-size: 10px;
`
