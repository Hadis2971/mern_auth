import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/authActions";

class Navbar extends React.Component {
    render(){

    let link = null;
    if(this.props.auth.isAuthenticated){
        link = <button className="nav-link" onClick={this.props.logout}  style={{color: "#FFF", backgroundColor: "transparent", border: "none", cursor: "pointer"}}>Logout</button>;
    }else {
        link = <Link className="nav-link" to="/login"  style={{color: "#FFF"}}>Login</Link> 
        
    }

    return(
        <nav className="navbar navbar-light navbar-expand-lg" style={{backgroundColor: "#343148"}}>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/" style={{color: "#FFF"}}>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/register" style={{color: "#FFF"}}>Register</Link>
                </li>
                <li className="nav-item active">
                    {link}
                </li>
            </ul>
        </nav>
        );
    }
   
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logout())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);