import styled from "styled-components"

export  const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    background:var(--button-color);
    border:0.05rem solid var(--button-color);
    border-color:var(--button-color);
    color:var(--text-color);
    border-radius:0.5rem;
    padding:0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:#fff;
    }
`