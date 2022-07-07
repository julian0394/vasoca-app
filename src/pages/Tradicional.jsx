import styled from "@emotion/styled";

const Tradicional = () => {
  return (
    <div style={{marginTop: '5rem'}}>
      <StyTitulo>Tradicional</StyTitulo>
    </div>
  )
}

export default Tradicional;

// Styles
const StyTitulo = styled.h1`
  color: red;
  margin-top: 10rem;
`