import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { postOffer } from '../../api/offers';
import { getCompanyData } from '../../api/auth.api';
import '../../CSS/postOffer.css';

export const PostJobOffer = (props) => {

    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [infoSent, setInfoSent] = useState(false);
    const [sourcingWithInfluencer, setSourcingWithInfluencer] = useState(false);
    const [exclusiveHeadHunter, setExclusiveHeadHunter] = useState(false);
    const [personalityTest, setPersonalityTest] = useState(false);
    const [videoInterView, setVideoInterview] = useState(false);
    const [kitOnBoarding, setKitOnBoarding] = useState(false);
    const [description, setDescription] = useState('')
    const [processState, setProcessState] = useState(false);
    const [isRemote, setIsRemote] = useState(false);
    const [sector, setSector] = useState([". . .", "Administración Gubernamental", "Aeronáutica y aviación", "Agricultura", "Alimentación y bebidas", "Almacenamiento", "Arquitectura y planificación", "Artes escénicas", "Artesanía", "Artículos de consumo", "Artículos de lujo y joyas", "Artículos deportivos", "Atención a la salud mental", "Atención sanitaria y hospitalaria", "Automación industrial", "Banca", "Bellas artes", "Bienes inmobiliarios", "Biotecnología", "Construcción", "Consultoría", "Contabilidad", "Cosmética", "Deportes", "Derecho", "Desarrollo de programación", "Diseño", "Diseño gráfico", "Dotación y selección de personal", "Educación primaria/secundaria", "Energía renovable y medioambiente", "Enseñanza superior", "Entretenimiento", "Equipos informáticos"])
    

    const sectorType = sector.map(sectorType => sectorType);


    const handleClickSOurcingWithInfluencer = () => setSourcingWithInfluencer(!sourcingWithInfluencer);
    const handleClickhasExclusiveHeadHunter = () => setExclusiveHeadHunter(!exclusiveHeadHunter);
    const handleClickhasPersonalityTest = () => setPersonalityTest(!personalityTest);
    const handleClickhasVideoInterview = () => setVideoInterview(!videoInterView);
    const handleClickhasKitOnBoardingGamanfy = () => setKitOnBoarding(!kitOnBoarding);
    const processStateHandler = () => setProcessState(!processState);
    const isRemoteHandler = () => setIsRemote(!isRemote);
    const handleSector = (e) => setSector(sectorType)


    useEffect(() => {

        const fetchData = async () => {
            const result = await getCompanyData(props.match.params.companyId)
            setDescription(result.data.description);
        };

        fetchData();


    }, [props.match.params.companyId]);

    const onSubmit = (data) => {

        postOffer(props.match.params.companyId, data)
            .then(function (result) {

                if (result.status === 200) {
                    setInfoSent(!infoSent)
                    history.push(`/company/${props.match.params.companyId}/dashboard`)
                } else {
                    setInfoSent(infoSent);
                };
            })
            .catch(function (error) {

                if (error.response.status !== 200) {

                    setInfoSent(false);
                    return;
                };
            });
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
                                defaultValue='5'
                                placeholder='Puntuación por Recomendación' />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="moneyPerRec"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                placeholder='Recompensa por recomendación €' />
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
                        <div><label>Servicios Adicionales</label></div>
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

                        <div>
                            <input
                                type="text"
                                name="description"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                defaultValue={description}
                                placeholder='Descripción' />
                        </div>
                        <div><label>Datos de la oferta</label></div>
                        <div>
                            <input
                                type="text"
                                name="jobName"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                placeholder='Nombre de la oferta' />
                        </div>

                        <div>
                            <label>Fecha de inicio</label>
                            <input
                                type="date"
                                name="onDate"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                            />
                        </div>
                        <div>
                            <label>Fecha final</label>
                            <input
                                type="date"
                                name="offDate"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                            />
                        </div>

                        <div className="switch-button">
                            <label>Estado del proceso</label>
                            <input className="switch-button__checkbox" type="checkbox" id="switch-label" name="processState" onClick={processStateHandler} ref={register} />
                            <label htmlFor="switch-label" className="switch-button__label"></label>
                        </div>

                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="isRemote  " onClick={isRemoteHandler} ref={register} />
                                Remoto
                            </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="personsOnCharge"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                placeholder='Personas a cargo' />
                        </div>

                        <div>
                            <label>
                                Seleccione su sector
              <select
                                    name='sector'
                                    className='form-control signup-fields mx-auto'
                                    ref={register({ required: true })}
                                    onChange={e => handleSector(e)}
                                >
                                    {
                                        sectorType.map((doc, key) => {

                                            return <option key={key} value={doc}>{doc}</option>;

                                        })

                                    }
                                </select>
                            </label>
                        </div>


                        <p className='p-cacc'> <input type="submit" className='btn-cacc-su' value='Publicar oferta de trabajo' /> </p>

                    </form>
                </div>
            </>

        </div>

    )
}
