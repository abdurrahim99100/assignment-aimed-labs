import styled from "styled-components";

// container div
export const StyleDiv1 = styled.div`
width: auto;
/* height: 520px; */
margin-top: 200px;
display: flex;
gap: 40px;
justify-content: center;

@media (max-width: 768px) {
   display: flex;
   flex-direction: column;
  }
`;

// style div 2
export const StyleDiv2 = styled.div`
width: 580px;

@media (max-width: 768px) {
   display: flex;
   justify-content: center;
   
  }
`;

// style div 3
export const StyleDiv3 = styled.div`
width: 580px;
padding: 50px;
box-shadow: 0px 10px 40px 0px #00000029;
border-radius: 10px;
`;

// login img
export const StyleImg = styled.img`
@media (max-width: 768px) {
   
  }
`;

// login p;
export const StyleP = styled.p`
text-align: center;
font-size: 48px;
font-weight: 700;
margin-bottom: 20px;
`;

// style input 1;
export const StyleInput1 = styled.input`
display: block;
width: 100%;
padding: 7px;
border-radius: 5px;
border: 1px solid #04072F66;
margin-bottom: 20px;
`;

// style input 1;
export const StyleInput2 = styled.input`
display: block;
width: 100%;
padding: 7px;
border-radius: 5px;
border: 1px solid #04072F66;
`;

// remember container;
export const StyleRemember = styled.div`
margin-top: 10px;
display: flex;
justify-content: space-between;
`;

// input change password;
export const StyleInputChangePassword = styled.input`
border: none;
background-color: white;
color: #F78719;
`;

export const StyleLoginButton = styled.button`
display: block;
background-color: #1575A7;
border: none;
color: white;
border-radius: 5px;
width: 400px;
height: 33px;
`;