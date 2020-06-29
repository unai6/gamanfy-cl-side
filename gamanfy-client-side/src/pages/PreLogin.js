import React from 'react'

export const PreLogin = () => {
    return (
        <div className='div-wrapper'>
            <div className='d-lg-flex justify-content-center p-0'>
                <div className=' ml-4 homeContainer-left'>
                    <h3>Soy influencer</h3>

                    <p className='p-cacc'><a className='btn-cacc' href='/auth/user/login'>Login <i className="fas fa-arrow-right"></i></a></p>
                </div>

                <div className=' ml-4 homeContainer-right'>
                    <h3>Soy empresa</h3>

                    <p className='p-cacc'> <a className='btn-cacc mx-auto' href='/auth-co/company/login'>Login <i className="fas fa-arrow-right"></i></a></p>
                </div>
            </div>
        </div>
    )
}
