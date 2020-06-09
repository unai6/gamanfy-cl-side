import React, { Component } from 'react'
import { postConfirmationToken } from '../api/auth.api';
import './UserCompanyCompleteProfile'
import { Redirect } from 'react-router-dom';


class ConfirmationToken extends Component {


    constructor(props) {
        super(props)
        console.log(props)

        this.state = {
            email: '',
            userToken: this.props.match.params.userToken,
            userId:this.props.match.params.userId,
            infoSent:false
        }

    }


    handleFormSubmit =  event => {
        event.preventDefault();

        const { userId, email, userToken } = this.state;

        postConfirmationToken(userId, userToken, email)
            .then(response => {
                console.log(response)
                this.setState({
                    infoSent: true
                })
            .then(this.history.push(`/auth/${this.state.userId}/complete-profile`))
            })
    };


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

    };
    render() {
        const { email, userToken, userId } = this.state;
        return (
            
            <div className='background-color'>
                {this.state.infoSent === false ? (   
                    
                    <div className="col-sm-12 my-auto">

                    <div className='col-sm-12 h-100 d-lg-flex'>
                        <div className="mx-auto mt-5" style={{ height: '40vh' }}>

                            <form className="form-group col-sm-12 d-table" onSubmit={this.handleFormSubmit}>
                                <div>

                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="formGroupExampleInput"
                                        placeholder="E-mail @"
                                        name='email'
                                        value={email}
                                        onChange={this.handleChange}
                                    />



                                    <input
                                        type="hidden"
                                        className="form-control mb-3"
                                        id="formGroupExampleInput2"
                                        name='userToken'
                                        defaultValue={userToken}

                                    />
                                     <input
                                        type="hidden"
                                        className="form-control mb-3"
                                        id="formGroupExampleInput2"
                                        name='userId'
                                        defaultValue={userId}

                                    />


                                </div>


                                <>
                                <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Verificar mi cuenta' /> </p>

                                </>

                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                
                    <Redirect to={`/auth/${this.state.userId}/complete-profile`}/>
            
            )}
             
            </div>

        );
    }
}

export default ConfirmationToken