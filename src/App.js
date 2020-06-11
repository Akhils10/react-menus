import React, { Component } from 'react'
import styled from "styled-components";

import Navbar from "./components/navbar/Navbar";

import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />

        <Wrapper>
            <h1> Hello Menu App </h1>
        </Wrapper>
      </>
    )
  }
}

export default App

const Wrapper = styled.div`
  margin: 60px auto;

  h1 {
    text-align: center;
    font-size: 40px;
  }
  `;

