import React from 'react'

export const PreLogin = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className='mr-5 homeContainer'>
                    <h3>Soy influencer</h3>

                    <p className='p-cacc'><a className='btn-cacc' href='/auth/user/login'>Login <i className="fas fa-arrow-right"></i></a></p>
                </div>

                <div className=' ml-5 homeContainer'>
                    <h3>Soy empresa</h3>

                    <p className='p-cacc'> <a className='btn-cacc mx-auto' href='/auth-co/company/login'>Login <i className="fas fa-arrow-right"></i></a></p>
                </div>
            </div>
        </div>
    )
}
