import React from 'react'
import styled from "styled-components";


const Home = () => {
  return (
    <Wrapper>
        <h1 className="text-dark mt-3"> Hello Menu App </h1>

        <p className="">The above demonstrates a fully mobile responsive navbar menu</p>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  margin: 60px auto;

  h1 {
    text-align: center;
    font-size: 40px;
  }
 `;

