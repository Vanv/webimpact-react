import React, {Component} from 'react';
import contactimg from '../../../images/contact-webimpact.png';
import "./contact.scss";


const initialState = {
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
    nameError: '',
    emailError: '',
    mobileError: '',
    subjectError: '',
    messageError: '',
    success: false
}
const encode = data => {
    let query = '';
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        query += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
      }
    }
    return query;
  };

class Contact extends Component {
    constructor (props) {
        super (props);
        this.state = initialState;
        this.validate = this.validate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate () {
        const {
            name,
            email,
            mobile,
            message
        } = this.state;

        let nameError;
        let emailError;
        let mobileError;
        let messageError;


        if (!name) {
            nameError = "Please enter your name";
        }
        if (!email.includes("@")) {
            emailError = 'Please enter a valid email address';
        }
        if (!mobile) {
            mobileError = "Please enter your mobile number";
        }
        if (!message) {
            messageError = "Please enter your message"; 
        }
        
        if(nameError || emailError || mobileError || messageError) {
            this.setState({nameError, emailError, mobileError, messageError});
            return false;
        }
        return true;
    }
    handleChange (event) {
        const { target } = event;
        const isCheckbox = target.type === 'checkbox';
        const item = target.name;
     
        this.setState({
        //   [event.target.name]: isCheckbox
        //     ? target.checked
        //     : target.value
            [event.target.name] : target.value
        });
      };

    handleSubmit (event) {
        const that = this;
        const valid = this.validate();

        if (valid) {
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                body: encodeURI({
                    'form-name': 'contactForm',
                    name: this.state.name

                })
            })
            .then(() => {
                that.setState({
                    success: true
                });
            })
            .catch(error => {
                console.log(error);
            });
        } 
        // const that = this;
        // const valid = this.validate();
        
        event.preventDefault();
        // console.log(this.refs.name.value)
        // console.log(this.refs.email.value)
        console.log(this.state);
    }

    render() {
        const { name, success } = this.state;
        return(
            <div className="contact-wrapper">
                <div className="container">
                        <h1 className="title">Contact me</h1>
                            <div className="columns">
                                <div className="column is-half">
                                <div className="container">
                                <div className="form-container">
                                    <form onSubmit={this.handleSubmit}> 
                                        <input type="hidden" name="form-name" value="orderform" />
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-primary" 
                                                type="text" 
                                                placeholder="Name" 
                                                name="name" 
                                                ref="name"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="error-display is-danger">
                                                {this.state.nameError}
                                            </div>
                                        </div>
                                        
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-primary" 
                                                type="email" 
                                                placeholder="Email" 
                                                name="email"
                                                ref="email"  
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="error-display">
                                                {this.state.emailError}
                                            </div>
                                        </div> 
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-primary"
                                                type="number"
                                                placeholder="Mobile Number"
                                                name="mobile"
                                                value={this.state.mobile}
                                                onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="error-display">
                                               {this.state.mobileError}
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <textarea className="textarea is-primary" 
                                                placeholder="Your message" 
                                                name="message" 
                                                value={this.state.message}
                                                onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="error-display">
                                               {this.state.messageError}
                                            </div>
                                        </div>
                                        
                                        <div className="control">
                                            <button className="button is-primary" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="column is-half">
                            <img src={contactimg} alt="Contact Me" />
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }       
}

export default Contact;