import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { postOffer } from '../../api/offers';
import { getCompanyData } from '../../api/auth.api';
import '../../CSS/postOffer.css';
import countries from '../../countries.json';
import $ from "jquery";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { competencesJS } from '../../FolderForSelects/competencesJS';
import { languageOptions } from '../../FolderForSelects/languageOptions';
import { userBenefits } from '../../FolderForSelects/userBenefits';
import { sectors, categories, contracts, experience, studies } from '../../FolderForSelects/htmlSelects';




export const PostJobOffer = (props) => {

    const [updateState, setUpdateState] = useState(false)
    const animatedComponents = makeAnimated();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [handler, setHandler] = useState(false);
    const [, setDescription] = useState('');
    const [, setCompanyName] = useState('');
    const [, setWebsite] = useState('');
    const [sector, setSector] = useState(sectors);
    const [countryNameState, setCountryNameState] = useState(countries.map(country => country.name.common));
    const [category, setCategory] = useState(categories);
    const [contract, setContract] = useState(contracts);
    const [minExp, setMinExp] = useState(experience);
    const [minStudies, setMinStudies] = useState(studies);
    const [language, setLanguage] = useState([]);
    const [competences, setCompetences] = useState([]);
    const [benefits, setBenefits] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([]);


    const countryName = countryNameState.map(countryName => countryName);
    const sectorTypeMap = sector.map(sectorTypeMap => sectorTypeMap);
    const categoryNameMap = category.map(categoryNameMap => categoryNameMap);
    const contractNameMap = contract.map(contractNameMap => contractNameMap);
    const minExpMap = minExp.map(minExpMap => minExpMap);
    const minStudiesMap = minStudies.map(minStudiesMap => minStudiesMap);


    const handleTrueOrFalse = () => setHandler(!handler);
    const handleSector = () => setSector(sectorTypeMap);
    const handleCountryName = () => setCountryNameState(countryName);
    const handleCategory = () => setCategory(categoryNameMap);
    const handleContract = () => setContract(contractNameMap);
    const handleMinExp = () => setMinExp(minExpMap);
    const handleStudies = () => setMinStudies(minStudiesMap);

    const createOption = (label) => ({
        label,
        value: label,
    });

    const components = {
        DropdownIndicator: null,
    };

    const handleChange = (value) => {
        setValue(value)
    };

    const handleInputChange = (inputValue) => {
        setInputValue(inputValue)
    };

    const handleKeyDown = (event) => {
        event = event || window.event
        if (!inputValue) return;
        switch (event.key || event.keyCode) {
            case 'Enter':
            case 'Tab':
            case  13:
            case 229:
                setInputValue('')
                setValue([...value, createOption(inputValue)])
                event.preventDefault();
                break;
            default: return;
        }
    };

    let competencesToSet = competencesJS.map((comp, index) => {
        return {
            label: comp.label,
            value: comp.value,
            key: index,
        }
    });

    let languageOptionsToSet = languageOptions.map((lang, index) => {
        return {
            label: lang.label,
            value: lang.value,
            key: index,
        }
    });

    let socialBenefits = userBenefits.map((ben, index) => {
        return {
            label: ben.label,
            value: ben.value,
            key: index
        }
    })
    
    const onSubmit = async (data) => {  
        await postOffer(props.match.params.companyId, data)
        setUpdateState(!updateState)
    };


    useEffect(() => {

        const fetchData = async () => {
            const result = await getCompanyData(props.match.params.companyId)
            setDescription(result.data.user.description);
            setWebsite(result.data.user.website)
            setCompanyName(result.data.user.companyName)
            
        };

        setUpdateState(!updateState)
        fetchData();
    }, [props.match.params.companyId, updateState]);



    $(() => {
        $("#varRetrib").click(function () {
            if ($(this).is(":checked")) {
                $("#hasVarRetBox").show();
            } else {
                $("#hasVarRetBox").hide();
            }
        });
    });



    const customTheme = (theme) => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'rgb(255, 188, 73)',
                primary: 'blue'
            }
        }
    }


    return (
        <div className='p-0'>
            <h3 className='profileh3'>Publicar Oferta</h3>

            <img className='gamanfy-logo' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />

            <form className='form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

                <div className='signUp-form  mx-auto'>
                    <h4 style={{ color: '#050D4D', fontWeight: 600 }}>Datos de la Oferta</h4>
                    <div>
                        <label>Nombre del puesto</label>
                        <input
                            type="text"
                            name="jobName"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Nombre del puesto' />
                    </div>
                    <label>
                        Sector
                                 <select
                            name='sector'
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            onChange={e => handleSector(e)}
                        >
                            {
                                sectorTypeMap.map((doc, key) => {

                                    return <option key={key} value={doc}>{doc}</option>;

                                })

                            }
                        </select>
                    </label>

                    <div>
                        <label>
                            Categoría
                             <select
                                name='category'
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                onChange={e => handleCategory(e)}
                            >
                                {
                                    categoryNameMap.map((doc, key) => {
                                        return <option key={key} value={doc}>{doc}</option>;
                                    })

                                }
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            Tipo de Contrato
                             <select
                                name='contract'
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                onChange={e => handleContract(e)}
                            >
                                {
                                    contractNameMap.map((doc, key) => {
                                        return <option key={key} value={doc}>{doc}</option>;
                                    })

                                }
                            </select>
                        </label>
                    </div>

                    <div>
                        <input
                            type="text"
                            name="minGrossSalary"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Salario mínimo anual bruto €' />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="maxGrossSalary"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Salario máximo bruto anual €   ' />
                    </div>

                    <div>
                        <label>
                            <input className='checkbox-label' disabled />

                            <input className='checkbox-round ' type="checkbox" id="varRetrib" name='variableRetribution'
                                onClick={handleTrueOrFalse} ref={register} />
                            <label htmlFor="varRetrib" ></label>

                            Retribución variable
                         </label>

                    </div>

                    <div id="hasVarRetBox" style={{ display: 'none' }}>
                        <input name='quantityVariableRetribution' className='form-control signup-fields mx-auto' ref={register} placeholder='Cantidad variable %' />

                    </div>

                    <div>

                        <label>
                            <input className='checkbox-label' disabled />
                            <input className='checkbox-round ' type="checkbox" name='showMoney'
                                onClick={handleTrueOrFalse} ref={register} />

                                        Mostrar el salario en la oferta
                                </label>
                    </div>

                    <div>
                        <label>Misión principal</label>
                        <textarea
                            style={{ height: '6em' }}
                            type="textarea"
                            name="mainMission"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Indica en una frase la misión principal del puesto de trabajo'
                            maxLength="4000"
                        />
                    </div>

                    <div>
                        <label>Descripción del puesto</label>
                        <textarea
                            style={{ height: '6em' }}
                            type="textarea"
                            name="jobDescription"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Indica en una frase la misión principal del puesto de trabajo'
                            maxLength="4000"
                        />
                    </div>

                    <div>
                        <label>Equipo</label>
                        <textarea
                            style={{ height: '6em' }}
                            type="textarea"
                            name="team"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Describe en que entorno y equipo va a trabajar'
                            maxLength="4000"
                        />
                    </div>

                    <div>
                        <label >
                            <input className='checkbox-label' disabled />
                            <input className='checkbox-round' type="checkbox" name="isRemote" onClick={handleTrueOrFalse} ref={register} />
                                ¿El puesto es para ser realizado en remoto/ teletrabajo?
                            </label>
                    </div>

                    <div>
                        <label>Responsable</label>
                        <input
                            type="text"
                            name="recruiter"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Gestor del proceso de selección'
                        />
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
                        <input className="switch-button__checkbox" type="checkbox" id="switch-label" name="processState" onClick={handleTrueOrFalse} ref={register} />
                        <label htmlFor="switch-label" className="switch-button__label"></label>
                    </div>

                    <div>
                        <input
                            type="text"
                            name="personsOnCharge"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Personas a cargo' />
                    </div>
                </div>



                <div className='signUp-form mx-auto'>
                    <h4 style={{ color: '#050D4D', fontWeight: 600 }}>Detalles de Localización</h4>

                    <div>
                        <label>
                            País
                             <select
                                name='countryName'
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                onChange={e => handleCountryName(e)}
                            >
                                {
                                    countryName.map((doc, key) => {
                                        return <option key={key} value={doc}>{doc}</option>;
                                    })

                                }
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>Ciudad</label>
                        <input
                            type="text"
                            name="cityForOffer"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Ciudad' />
                    </div>

                    <div>
                        <label>Calle</label>
                        <input
                            type="text"
                            name="street"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Calle' />
                    </div>

                    <div>
                        <label>Número</label>
                        <input
                            type="text"
                            name="number"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Número' />
                    </div>

                    <div>
                        <label>Código Postal</label>
                        <input
                            type="text"
                            name="zip"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Código postal' />
                    </div>

                </div>

                <div className='signUp-form  mx-auto'>

                    <h4 style={{ color: '#050D4D', fontWeight: 600 }}>Requisitos</h4>

                    <div>
                        <label>
                            Experiencia Mínima
                             <select
                                name='minExp'
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                onChange={e => handleMinExp(e)}
                            >
                                {
                                    minExpMap.map((doc, key) => {
                                        return <option key={key} value={doc}>{doc}</option>;
                                    })

                                }
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Estudios Mínimos
                             <select
                                name='minStudies'
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                onChange={e => handleStudies(e)}
                            >
                                {
                                    minStudies.map((doc, key) => {
                                        return <option key={key} value={doc}>{doc}</option>;
                                    })

                                }
                            </select>
                        </label>
                    </div>
                    <>
                        <div>
                            <label>Competencias Clave</label>
                            <Select
                                closeMenuOnSelect={false}
                                theme={customTheme}
                                components={animatedComponents}
                                placeholder='Seleccionar'
                                isMulti
                                isSearchable
                                options={competencesToSet}
                                onChange={setCompetences}
                                noOptionsMessage={() => 'No existen más opciones'}
                                name="keyComp"
                                value={competences}
                            />
                            {!props.disabled && competences !== null && (<input name='keyComp' type='hidden' ref={register} onChange={setCompetences} value={JSON.stringify(competences.map(comp => comp.value))} />)}


                        </div>
                    </>

                    <>
                        <div className='mt-2'>
                            <label>Conocimientos Clave</label>
                            <CreatableSelect
                                closeMenuOnSelect={false}
                                theme={customTheme}
                                inputValue={inputValue}
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                components={components}
                                placeholder='Seleccionar'
                                isMulti
                                isClearable
                                menuIsOpen={false}
                                name="keyKnowledge"
                                value={value}
                            />
                            {!props.disabled && value !== null && (<input name='keyKnowledge' type='hidden' ref={register} onKeyDown={handleKeyDown} onChange={handleChange} value={JSON.stringify(value.map(val => val.value))} />)}


                        </div>
                    </>

                    <div className='mt-2'>
                        <label>Requisitos mínimos</label>
                        <textarea
                            style={{ height: '8em' }}
                            type="textarea"
                            name="minReqDescription"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: true })}
                            placeholder='Indica experiencia, disponibilidad, certificaciones y otros requisitos imprescindibles para el puesto. (Máx. 4000 caracteres)'
                            maxLength="4000"
                        />
                    </div>

                    <>
                        <div>
                            <label>Idiomas</label>
                            <Select

                                closeMenuOnSelect={false}
                                theme={customTheme}
                                components={animatedComponents}
                                placeholder='Seleccionar'
                                isMulti
                                isSearchable
                                options={languageOptionsToSet}
                                onChange={setLanguage}
                                noOptionsMessage={() => 'No existen más opciones'}
                                name="language"
                                value={language}
                            />

                            {!props.disabled && language !== null && (<input name='language' type='hidden' ref={register} onChange={setLanguage} value={JSON.stringify(language.map(lang => lang.value))} />)}


                        </div>
                    </>

                    <>
                        <div>
                            <label>Beneficios Sociales</label>
                            <Select
                                closeMenuOnSelect={false}
                                theme={customTheme}
                                components={animatedComponents}
                                placeholder='Seleccionar'
                                isMulti
                                isSearchable
                                options={socialBenefits}
                                onChange={setBenefits}
                                noOptionsMessage={() => 'No existen más opciones'}
                                name="benefits"
                                value={benefits}
                            />
                            {!props.disabled && benefits !== null && (<input name='benefits' type='hidden' ref={register} onChange={setBenefits} value={JSON.stringify(benefits.map(ben => ben.value))} />)}

                        </div>
                    </>
                </div>


                <div className='signUp-form mx-auto'>
                    <h4 style={{ color: '#050D4D', fontWeight: 600 }}>Detalles Adicionales</h4>
                    <div>
                        <input
                            type="hidden"
                            name="scorePerRec"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: false })}
                            defaultValue='5'
                            placeholder='Puntuación por Recomendación' />
                    </div>

                    <div>
                        <input
                            type="hidden"
                            name="moneyPerRec"
                            className='form-control signup-fields mx-auto'
                            ref={register({ required: false })}
                            placeholder='Recompensa por recomendación €' />
                    </div>

                    <label>Servicios de Contratación</label>
                    <label>¿Cómo quieres llevar a cabo la selección?</label>
                    <div>
                        <label>
                            <input className='checkbox-label' disabled />
                            <input className='checkbox-round' type="checkbox" name="hasSourcingWithInfluencer" onClick={handleTrueOrFalse} ref={register} />
                                        Sourcing con Influencer
                                </label>
                    </div>

                    <div>
                        <label>
                            <input className='checkbox-label' disabled />
                            <input className='checkbox-round' type="checkbox" name="hasExclusiveHeadHunter" onClick={handleTrueOrFalse} ref={register} />
                                        Servicio exclusivo headhunting
                                </label>
                    </div>
                    <p className='p-inputs p-u-postJob text-left mt-2'><u>¿Qué es esto?</u></p>
                    <div>
                        <label>Servicios Adicionales</label><br />
                        <label>
                            <input className='checkbox-label' disabled />
                            <input className='checkbox-round' type="checkbox" name="hasPersonalityTest" onClick={handleTrueOrFalse} ref={register} />

                                        Test de personalidad (+100€)
                                </label>

                        <label >
                            <input className='checkbox-label' disabled />
                            <input className='checkbox-round' type="checkbox" name="hasVideoInterview" onClick={handleTrueOrFalse} ref={register} />
                                        Video entrevista en diferido (+150€)
                                    </label>

                        <label >
                            <input className='checkbox-label' disabled />
                            <input className='checkbox-round' type="checkbox" name="hasKitOnBoardingGamanfy" onClick={handleTrueOrFalse} ref={register} />
                                        Kit onboarding Gamanfy (+200€)
                                </label>
                    </div>
                </div>

               <button type="submit" style={{ width: '15em' }} className='btn-cacc-su d-block mx-auto'> Publicar Oferta de Trabajo</button> 

            </form>
        </div>

    )
}
