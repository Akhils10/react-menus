import React, { Component } from "react";

import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  border: 1px solid #efefef;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  margin-top: 20px;
  background: #f3f3f3;
  height: 60px;

  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 16px;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 16px;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
    .show_more {
      margin: 0 20px;
      justify-content: space-between;
      padding: 3px 5px;
      background: #fff;
      color: #007bff;
      border: 1px solid #007bff;
      border-radius: 4px;
      font-size: 16px;
    }
  }

`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <nav className="nav">
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <li><a href="/">Item 1</a></li>
            <li><a href="/">Item 2</a></li>
            <li><a href="/">Item 3</a></li>
            <li><a href="/">Item 4</a></li>
            <li><a href="/">Item 5</a></li>
            <li><a href="/">Item 6</a></li>
            <li><a href="/">Item 7</a></li>
            <li><a href="/">Item 8</a></li>
            <button className="show_more" onClick={e => this.handleToggle(e)}> More </button>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Menu;
