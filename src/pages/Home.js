import React from 'react'
import styled from "styled-components";


const Home = () => {
  return (
    <Wrapper>
        <h1 className="text-dark mt-3"> Hello Menu App </h1>

        <p className="lead mt-3 text-center">This app is a sample app built to demonstrate the mobile responsive navbar menu as requested, built in reactjs</p>
        <p className="lead text-center">You may find the complete code in the <pre><code> <a href="https://github.com/akhils10/react-menus">Github repo</a> </code></pre></p>
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

  p {
  	font-size: 18px;
  	margin-top: 10px
  }
 `;

