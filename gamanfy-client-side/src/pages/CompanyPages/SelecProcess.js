import React, { useState, useEffect } from 'react';
import { getCompanyData } from '../../api/users';


export const SelecProcess = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const any = async () => {
            getCompanyData(props.match.params.companyId).then(apiRes => {
                console.log(apiRes.data)
                setData(apiRes.data);

            });

        }
        any()
    }, [props.match.params.companyId]);


    return (
        <div>
        
        </div>
    )
}


