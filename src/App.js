import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,HashRouter as Router,Route,Routes} from 'react-router-dom';
import EmployeeList from './components/EmployeeList.js';
import DashboardEmployee from './components/employee/DashboardEmployee.jsx'
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeForm from "./components/EmployeeForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    // <EmployeeList />
    <Router>
      <Routes>
        <Route path="/" element={<DashboardEmployee />} />
    {/* //     <Route path="/employees/:id" component={EmployeeDetails} />
    //     <Route path="/form" component={EmployeeForm} />
    //     <Route component={Header} />
    //     <Route component={NotFound} />
    //     <Route component={Footer} /> */}
      </Routes>
    </Router>
  );
};

export default App;
