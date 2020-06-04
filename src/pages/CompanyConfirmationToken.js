import React, { Component } from 'react'
import { companyPostConfirmationToken } from '../api/auth.api';



class ConfirmationToken extends Component {


    constructor(props) {
        super(props)
        console.log(props)

        this.state = {
            email: '',
            companyToken: this.props.match.params.companyToken
        }

    }


    handleFormSubmit = async event => {
        event.preventDefault();

        const { email, companyToken } = this.state;

        companyPostConfirmationToken(companyToken, email)
            .then(response => {
                console.log(response)
                this.setState({
                    infoSent: true
                })
                this.props.history.push('/auth/user/login')
            })
        // console.log(companyToken)
        // console.log(email);
    };


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

    };
    render() {
        const { email, companyToken } = this.state;
        return (
            <div className='background-color'>
                <div className="col-sm-12 my-auto">

                    <div className='col-sm-12 h-100 d-table'>
                        <div className="card-container col-md-4 col-lg-6 mx-auto text-center card card-block " style={{ height: '40vh' }}>

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
                                        name='companyToken'
                                        defaultValue={companyToken}

                                    />

                                </div>

                                <>
                                    <button className='btn btn-block text-uppercase text-light bg-dark  mt-4' type='submit' value='Submit'>Verify your account</button>

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