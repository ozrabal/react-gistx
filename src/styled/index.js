import styled from 'styled-components'
import * as helper from './helpers'

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
    padding: 0 15px;
    a {
        text-decoration: none;
        color: ${props => props.theme.linkColor};
        &:hover {
            text-decoration: underline;
        }
    }
`
export const Row = styled.div`
    display: flex;
`
export const Column = styled.div`
    ${({xs}) => (xs ? helper.width(xs) : 'width: 100%;')};

    @media only screen and (min-width: 768px) {
        ${({sm}) => sm && helper.width(sm)};
    }

    @media only screen and (min-width: 992px) {
        ${({md}) => md && helper.width(md)};
    }

    @media only screen and (min-width: 1200px) {
        ${({lg}) => lg && helper.width(lg)};
    }
`
export const Header = styled.div`
    background-color: ${props => props.theme.header.bgColor};
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
    background-color: ${props => props.theme.tag.bgColor};
    border: 1px solid ${props => props.theme.tag.borderColor};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.tag.textColor};
    font-size: 12px;
    padding: 1px 2px;
    &:hover{
        color: ${props => props.theme.tag.hoverTextColor};
        background-color: ${props => props.theme.tag.hoverBgColor};
    }
    button {
        border: none;
        background-color: transparent;
        color: inherit;
        line-height: 1;
        :focus{
            color: ${props => props.theme.textColor};
            outline: none;
        }
    }
`
export const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid ${props => props.theme.blueDarkColor};
    background-color: ${props => props.theme.blueLight};
    div {
        float: left;
        margin: 2px;
    }
`
export const Alert = styled.div`
    background-color: ${props => props.theme[props.type].alertBg};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: ${props => props.theme.borderRadius || 0};
    p {
        color: ${props => props.theme[props.type].alertText || props.theme.textColor};
        font-weight: 400;
    }
`
export const Tags = styled.ul`
    list-style: none;
    padding: 0;
    li {
        display: inline-block;
        margin: 0 2px;
        &:first-child {
            margin-left: 0;
        }
    }
`
export const Time = styled.time`
    font-size: 10px;
`
