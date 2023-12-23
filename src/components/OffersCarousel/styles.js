import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow{
        background: #9758a6;
        color: #FFFFFF;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border: none;
    }
    .rec.rec-arrow:hover{
        border: 2px solid #9758a6;
        background: #FFFFFF;
        color: #9758a6;
    }
    .rec.rec-arrow:disabled{
        border: none;
        background: #bebebf;
        color: #FFFFFF;
    }
`

export const OfferImg = styled.img`


`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;

    p{
        color: #424242;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;

    }
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 15px;
    margin-bottom: 16px;
`

export const Button = styled(Link)`
    margin-top: 16px;
    background: #9758a6;
    box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22), 0px 20px 40px rgba(151, 88, 166, 0.24);
    border-radius: 8px;
    height: 50px;
    border: none;
    color: #FFFFFF;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 100%;
    text-align: center;

    cursor: pointer;

    &:hover{
        opacity: 0.75;
    }
    &:active{
        opacity: 0.6;
    }

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content; center;
`