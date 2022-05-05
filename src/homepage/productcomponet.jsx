import styled from "styled-components"
export const Bestseller= ()=>{
    const Prodmaindiv = styled.div`
        border: 2px solid red;
        display: flex;
        justify-content: space-between;
    `;
    const Productsubdiv = styled.div`
            
            border  : 2px solid green ;

           
    `;

    return <Prodmaindiv>

        <Productsubdiv>
            ritik
        </Productsubdiv>
        <Productsubdiv>
            ritk
        </Productsubdiv>
        <Productsubdiv>

        </Productsubdiv>
    </Prodmaindiv>
 
}