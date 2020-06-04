import React, { Component } from 'react'
import { postConfirmationToken } from '../api/auth.api';



class ConfirmationToken extends Component {


    constructor(props) {
        super(props)
        console.log(props)

        this.state = {
            email: '',
            userToken: this.props.match.params.userToken
        }

    }


    handleFormSubmit = async event => {
        event.preventDefault();

        const { email, userToken } = this.state;

        postConfirmationToken(userToken, email)
            .then(response => {
                console.log(response)
                this.setState({
                    infoSent: true
                })
                this.history.push('/auth/user/login')
            })
    /*     console.log(userToken)
        console.log(email); */
    };


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

    };
    render() {
        const { email, userToken } = this.state;
        return (
            <div className='background-color'>
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


                                </div>


                                <>
                                <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Verificar mi cuenta' /> </p>

                                </>

                            </form>
                        </div>
                    </div>
                </div>
                <div className=" col-md-4 text-center" role="group" aria-label="Basic example">

                </div>
                <div className="col-md-4 text-center">
                </div>
            </div>

        );
    }
}

export default ConfirmationToken