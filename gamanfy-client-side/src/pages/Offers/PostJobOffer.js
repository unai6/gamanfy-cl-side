import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import {postOffer} from '../../api/offers';

export const PostJobOffer = (props) => {
    
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [infoSent, setInfoSent] = useState(false);
    const [sourcingWithInfluencer, setSourcingWithInfluencer] = useState(false);
    const [exclusiveHeadHunter, setExclusiveHeadHunter] = useState(false);
    const [personalityTest, setPersonalityTest] = useState(false);
    const [videoInterView, setVideoInterview] = useState(false);
    const [kitOnBoarding, setKitOnBoarding] = useState(false)


    const handleClickSOurcingWithInfluencer = () => setSourcingWithInfluencer(!sourcingWithInfluencer);
    const handleClickhasExclusiveHeadHunter = () => setExclusiveHeadHunter(!exclusiveHeadHunter);
    const handleClickhasPersonalityTest = () => setPersonalityTest(!personalityTest);
    const handleClickhasVideoInterview = () => setVideoInterview(!videoInterView);
    const handleClickhasKitOnBoardingGamanfy = () => setKitOnBoarding(!kitOnBoarding);

    const onSubmit = (data) => {
        postOffer( props.match.params.companyId, data)
          .then(function (result) {
    
            if (result.status === 200) {
              setInfoSent(true)
            } else {
              setInfoSent(false)
            }
            history.push(`/company/${props.match.params.companyId}/dashboard`)
          })
          .catch(function (error) {
    
            if (error.response.status !== 200) {
    
              setInfoSent(false)
              return;
            }
    
          })
      };

    return (
        <div>
            <>
                <img className='gamanfy-logo' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />
                <div>
                    <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                        <div>
                            <p className='p-signup'>
                                Para crear tu cuenta, completa este formulario<br />con tus datos de contacto.
                </p>
                            <p className='p-signup'>No te preocupes, más adelante podrás añadir <br /> los datos de tu empresa.</p>
                        </div>

                        <div>
                            <input
                                type="text"
                                name="scorePerRec"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                value='5'
                                placeholder='Puntuación por Recomendación' />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="moneyPerRec"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                placeholder='Nombre' />
                        </div>
                        <div><label>Servicios de Contratación</label></div>
                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="hasSourcingWithInfluencer" onClick={handleClickSOurcingWithInfluencer} ref={register} />
                                Sourcing con Influencer
                            </label>
                        </div>

                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="hasExclusiveHeadHunter" onClick={handleClickhasExclusiveHeadHunter} ref={register} />
                                Servicio exclusivo headhunting
                            </label>
                        </div>

                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="hasPersonalityTest" onClick={handleClickhasPersonalityTest} ref={register} />
                                Test de personalidad
                            </label>
                        </div>
                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="hasVideoInterview  " onClick={handleClickhasVideoInterview} ref={register} />
                                Video entrevista en diferido 
                            </label>
                        </div>
                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="hasKitOnBoardingGamanfy  " onClick={handleClickhasKitOnBoardingGamanfy} ref={register} />
                                Kit onboarding Gamanfy 
                            </label>
                        </div>




                    </form>
                </div>
            </>

        </div>

    )
}
