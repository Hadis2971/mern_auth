import React from "react";

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };

    inputChangeHandler = (evt) => {
        this.setState({[evt.target.id]:  [evt.target.value]});
    };

    formSubmitHandler = (evt) => {
        evt.preventDefault();

        const email = this.state.email;
        const password = this.state.password;

        console.log(email, password);
    };

    render(){
        return(
            <form onSubmit={this.formSubmitHandler}  style={{width: "50%", margin: "5% auto", padding: "3%", border: "0.1em solid #343148"}}>
                <h1 className="text-center display-4" style={{color: "#343148", marginBottom: "5%"}}>Sing In</h1>
                <div className="form-group">
                    <input type="email" value={this.state.email} onChange={this.inputChangeHandler} className="form-control" id="email" name="email" placeholder="Your Email..." />
                </div>
                <div className="form-group">
                    <input type="password" value={this.state.password} onChange={this.inputChangeHandler} className="form-control" id="password" name="password" placeholder="Your Password..." />
                </div>
                <button type="submit" className="btn btn-block" style={{backgroundColor: "#343148", color: "#FFF"}}>Login</button>
            </form>
        );
    }
}

export default Login;