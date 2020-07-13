import React, { Component } from 'react'
import { postConfirmationToken } from '../../api/auth.api';
import './UserCompanyCompleteProfile'
import { Link } from 'react-router-dom';
import '../../CSS/signupmssg.css'

class ConfirmationToken extends Component {


    constructor(props) {
        super(props)
        console.log(props)


        this.state = {
            email: '',
            userToken: this.props.match.params.userToken,
            userId: this.props.match.params.userId,
            isCompany: this.props.match.params.isCompany,
            infoSent: false
        }

    }


    handleFormSubmit = e => {
        e.preventDefault();

        const { userId, email, userToken, isCompany } = this.state;

        postConfirmationToken(userId, userToken, isCompany, email)
            .then(response => {
                console.log(response)
                this.setState({
                    infoSent: true
                })
                    .then(this.history.push(`/auth/${this.state.userId}/${this.state.isCompany}/complete-profile`))
            })
    };


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    };

    handleClick = (e) => {
        this.handleFormSubmit(e)
        this.setState({
            infoSent: true
        })
    }
    render() {
        const { email, userToken, userId, isCompany, infoSent } = this.state;
        return (

            <div className='background-color div-wrapper'>
                {infoSent === false ? (

                    <div className="col-sm-12 my-auto">
                        <img className='gamanfy-logo mx-auto' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />

                        <div className='col-sm-12 h-100 d-lg-flex'>
                            <div className="mx-auto mt-5" style={{ height: '40vh' }}>

                                <form className="form-group form-token col-sm-12 d-table bg-white rounded" onSubmit={this.handleFormSubmit}>

                                    <div>

                                        <input
                                            type="text"
                                            className="form-control mb-3 mt-3"
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
                                        <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Verificar mi cuenta' onClick={this.handleClick} /> </p>

                                    </>

                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className='d-flex justify-content-center mt-5'>

                            <Link className='p-cacc' to={`/auth/user/${this.state.userId}/${isCompany}/complete-profile`}>
                                <img className='gamanfy-logo mx-auto' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />
                                <button className='btn-cacc-su w-100 mt-5'>
                                    Accede a la plataforma después de haber rellenado los últimos datos de tu perfil (nada más que 20 segundos).
                                </button>
                            </Link>
                        </div>


                    )}

            </div>

        );
    }
}

export default ConfirmationToken