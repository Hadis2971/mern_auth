import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Dashboard extends React.Component {
    render(){
        if(!this.props.auth.isAuthenticated){
            return <Redirect to='/login'/>;
        }else{
            return(
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"></hr>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
            );
        }
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, null)(Dashboard);


            
            
            