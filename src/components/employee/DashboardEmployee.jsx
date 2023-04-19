import React, { Component,useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router";
import NavBar from "../NavBar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faUser,
    faFileAlt,
    faUniversity,
    faBriefcase,
    faMale,
  } from "@fortawesome/free-solid-svg-icons";

class DashboardEmployee extends Component{
    state = {
        redirect: true,
        checked: true 
      };
    handleChange=(checked)=> {
    console.log("switch");
    if(this.state.checked==true){ 
        document.getElementById("sidebar").setAttribute("class", "display-none");
    }
    else{document.getElementById("sidebar").setAttribute("class", "display-block");}   
    this.setState({ checked });
    }
    render() {
        return (
            <div id="outer-main-div">
                <div id="outer-nav">
                <NavBar
                    loginInfo={this.props.data}
                    checked={this.state.checked}
                    handleChange={this.handleChange}
                    onLogout={this.props.onLogout}
                    />
                </div>
                <div id="main-non-nav">
                    <div id="sidebar">
                    <div id="sidebar-top-content" />
                    <div id="main-title" className="main-title-employee">
                        Employee
                    </div>
                    <ul className="navbar-ul">
                        <li>
                        <Link>
                            <FontAwesomeIcon
                            icon={faUser}
                            className="sidebar-icon"
                            />
                            Personal Information
                        </Link>
                        </li>
                        {/* <li>
                        <Link
                            to={
                            "/employee/" + this.props.data["_id"] + "/education"
                            }
                        >
                            <FontAwesomeIcon
                            icon={faUniversity}
                            className="sidebar-icon"
                            />
                            Education
                        </Link>
                        </li> */}
                        {/* <li>
                        <Link to={
                            "/employee/" + this.props.data["_id"] + "/family-info"
                            }>
                            <FontAwesomeIcon
                            icon={faMale}
                            className="sidebar-icon"
                            />
                            Dependents
                        </Link>
                        </li> */}
                        {/* <li>
                        <Link to={
                            "/employee/" + this.props.data["_id"] + "/work-experience"
                            }>
                            <FontAwesomeIcon
                            icon={faBriefcase}
                            className="sidebar-icon"
                            />
                            WorkExp
                        </Link>
                        </li> */}
                        {/* <li>
                        <Link to={
                            "/employee/" + this.props.data["_id"] + "/leave-application-emp"
                            }>
                            <FontAwesomeIcon
                            icon={faFileAlt}
                            className="sidebar-icon"
                            />
                            Leave Application
                        </Link>
                        </li> */}
                    </ul>
                    </div>
                    <div id="main-area">
                    <div id="sidebar-top-content" />
                    <Routes>
                        {/* <Route
                        exact
                        path="/employee/:id/personal-info"
                        render={props => <PersonalInfo data={this.props.data} back={false}/>}
                        />
                        <Route
                        exact
                        path="/employee/:id/education"
                        render={props => <Education data={this.props.data} back={false}/>}
                        />
                        <Route
                        exact
                        path="/employee/:id/family-info"
                        render={props => <FamilyInfo data={this.props.data} back={false}/>}
                        />
                        <Route
                        exact
                        path="/employee/:id/work-experience"
                        render={props => <WorkExperience data={this.props.data} back={false}/>}
                        />
                        <Route
                        exact
                        path="/employee/:id/leave-application-emp"
                        render={props => <LeaveApplicationEmp data={this.props.data} />}
                        />
                        <Route
                        render={
                            () => <NotFound404/>
                            // <Redirect to={"/employee/"+ this.props.data["_id"]+"/personal-info"} />
                        }
                        /> */}
                    </Routes>
                    </div>
                </div>
                <div>
                    <h1>Employee List</h1>
                </div>
            </div>

          )

    }

}

export default DashboardEmployee;