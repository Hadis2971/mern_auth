import React from "react";

class Register extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: ""
    };

    inputChangeHandler = (evt) => {
        this.setState({[evt.target.id]:  [evt.target.value]});
    };

    formSubmitHandler = (evt) => {
        evt.preventDefault();

        
        const userData = {
            name: this.state.name.join(""),
            email: this.state.email.join(""),
            password: this.state.password.join(""),
            password2: this.state.password2.join("")
       }

       

       console.log(userData);
    };

    render(){
        return(
            <form onSubmit={this.formSubmitHandler}  style={{width: "50%", margin: "5% auto", padding: "3%", border: "0.1em solid #343148"}}>
                <h1 className="text-center display-4" style={{color: "#343148", marginBottom: "5%"}}>Sing Up</h1>
                <div className="form-group">
                    <input type="text" value={this.state.name} onChange={this.inputChangeHandler} className="form-control" id="name" name="name" placeholder="Your Name..." />
                </div>
                <div className="form-group">
                    <input type="email" value={this.state.email} onChange={this.inputChangeHandler} className="form-control" id="email" name="email" placeholder="Your Email..." />
                </div>
                <div className="form-group">
                    <input type="password" value={this.state.password} onChange={this.inputChangeHandler} className="form-control" id="password" name="password" placeholder="Your Password..." />
                </div>
                <div className="form-group">
                    <input type="password" value={this.state.password2} onChange={this.inputChangeHandler} className="form-control" id="password2" name="password2" placeholder="Confirm Password..." />
                </div>
                <button type="submit" className="btn btn-block" style={{backgroundColor: "#343148", color: "#FFF"}}>Register</button>
            </form>
        );
    }
}

export default Register;