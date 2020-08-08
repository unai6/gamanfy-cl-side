
import { useForm } from "react-hook-form";
import React ,{useState} from 'react'
import '../../CSS/offerDetails.css';
import { rejectRecommendation } from '../../api/recommendations';

export const RejectRecommendation = (props) => {
  
    const { handleSubmit } = useForm();
    const offerId = props.match.params.offerId;
    const recommendationId = props.match.params.recommendationId;
    const [infoSent, setInfoSent] = useState(false) 

    const onSubmit = async () => {

        await rejectRecommendation(recommendationId, offerId);
        setInfoSent(!infoSent)
    }

    return (
        <div className='div-wrapper'>
            <img className='gamanfy-logo' src='/logo_gamanfy_claro.png' alt='logo-gamanfy' />

            {
                !infoSent ?
            <form onSubmit={handleSubmit(onSubmit)}>
                <button className='btn-cacc-su w-50 mt-5 d-block mx-auto'> No quiero recibir más esta oferta</button>
            </form>
            :
            <div className='card mt-5 w-50 d-block mx-auto'>
                <p className='text-info mt-3' >Gracias por responder, hemos actualizado tu información y no volverás a recibir esta oferta.</p>
            </div>
            }
        </div>
    )
}


