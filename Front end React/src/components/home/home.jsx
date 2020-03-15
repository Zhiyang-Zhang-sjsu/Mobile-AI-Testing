import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
    render() { 
        return (
            <div>
              <h4 class="font-weight-bold" id="home-title">
                Explore AI Testing Market
              </h4>
              <div id="project">
                <ul class="list-group">
                  <a id="project-icon" >
                    <FontAwesomeIcon icon="tasks" size="6x" />
                  </a>
                  <a id="project-link">
                    <NavLink to="/projects">Project</NavLink>
                  </a>
                </ul>
              </div>
              <div id="device-land">
                <ul class="list-group">
                  <a id="device-land-icon" >
                    <FontAwesomeIcon icon="coins" size="6x" />
                  </a>
                  <a id="device-land-link">
                    <NavLink to="/mobiles">Device Land</NavLink>
                  </a>
                </ul>
              </div>
              <div id="td-table">
                <ul class="list-group">
                  <a id="td-table-icon" >
                    <FontAwesomeIcon icon="cube" size="6x" />
                  </a>
                  <a id="td-tabl-link">
                    <NavLink to="/tdTable">3D Table</NavLink>
                  </a>
                </ul>
              </div>
              <div id="testing-target">
                <ul class="list-group">
                  <a id="testing-target-icon" >
                    <FontAwesomeIcon icon="angle-double-right" size="6x" />
                  </a>
                  <a id="testing-target-link">
                    <NavLink to="/testingTarget">Testing Target</NavLink>
                  </a>
                </ul>
              </div>
              <div id="testing-script">
                <ul class="list-group">
                  <a id="testing-script-icon" >
                    <FontAwesomeIcon icon="scroll" size="6x" />
                  </a>
                  <a id="testing-script-link">
                    <NavLink to="/testingTarget">Testing Script</NavLink>
                  </a>
                </ul>
              </div>
            </div>
        );
    }
}
 
export default Home;