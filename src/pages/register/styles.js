import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


export const Wrapper = styled.div`
    max-width: max-content;
    margin: 0 0 0 8rem;

    form {
        max-width: 300px;
    }
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;
    max-width: 400px;

    color: #FFFFFF;
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubtitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const SmallText = styled.p`
    font-size: 16px;
    font-family: 'Open Sans';
    font-style: normal;
    line-height: 25px;
    margin-top: 1.5rem;
    max-width: 300px;
`

export const SmallStrongText = styled.p`
    font-size: 14px;
    font-weight: bold;
    font-family: 'Open Sans';
    font-style: normal;
    line-height: 25px;
    margin-top: .25rem;
`

export const SignInFormButton = styled.button`
    color: #23dd7a;
    background-color: transparent;
    border: none;
    padding: .25rem;
    font-weight: bolder;
    font-family: 'Open Sans';
    font-size: 14px;
    cursor: pointer;
`