import styled from "@emotion/styled";

export const Box = styled.div`
    width: 300px;

    display: flex;
    gap: 15px;
    padding: 5px 20px;

    align-items: center;

    border: 1px solid tomato;
    border-radius: 5px;
`
export const Img = styled.img`
    height: 45px;

    margin-right: 10px;

    border-radius: 7px;
`
export const Online = styled.div`
    width: 10px;
    height: 10px;

    background-color: green;

    border-radius: 50%;
`

export const Offline = styled.div`
    width: 10px;
    height: 10px;

    background-color: red;

    border-radius: 50%;
`