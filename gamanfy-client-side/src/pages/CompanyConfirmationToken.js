import React, { Component } from 'react'
import { companyPostConfirmationToken } from '../api/auth.api';
import { Link } from 'react-router-dom';

class ConfirmationToken extends Component {


    constructor(props) {
        super(props)
        console.log(props)

        this.state = {
            email: '',
            companyToken: this.props.match.params.companyToken,
            companyId: this.props.match.params.companyId,
            infoSent: false
        }

    }


    handleFormSubmit = async event => {
        event.preventDefault();

        const { email, companyToken, companyId } = this.state;

        companyPostConfirmationToken(companyId, companyToken, email)
            .then(response => {
                console.log(response)
                this.setState({
                    infoSent: true
                })
            })

    };


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

    };

    handleClick = (e) => {
        this.handleFormSubmit(e);
        this.setState({
            infoSent: true
        })
    }



    render() {
        const { companyId, email, companyToken, infoSent } = this.state;
        return (
            <div className='background-color'>

                {infoSent === false ? (
                <div className="col-sm-12 my-auto">

                    <div className='col-sm-12 h-100 d-table'>
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
                                        name='companyToken'
                                        defaultValue={companyToken}

                                    />
                                    <input
                                        type="hidden"
                                        className="form-control mb-3"
                                        id="formGroupExampleInput2"
                                        name='companyId'
                                        defaultValue={companyId}

                                    />

                                </div>

                                <>
                                    <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Verificar mi cuenta' onClick={this.handleClick} /> </p>

                                </>

                            </form>
                        </div>
                    </div>
                </div>
                ): (
                <div className='d-flex justify-content-center mt-5'>
                    <Link className='p-cacc' to={`/auth-co/company/${this.state.companyId}/complete-profile`}>
                    <button className='btn-cacc-su w-100'>
                     Tu cuenta ha sido verificada, por favor haz click en <u>link</u> para completar tu perfil
                    </button>
                    </Link>
                </div>
                    )}

            </div>

        );
    }
}

export default ConfirmationToken