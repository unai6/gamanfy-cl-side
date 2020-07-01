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

    const animatedComponents = makeAnimated();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [infoSent, setInfoSent] = useState(false);
    const [handler, setHandler] = useState(false);
    const [description, setDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [sector, setSector] = useState(sectors);
    const [website, setWebsite] = useState('');
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

    const handleChange = (value) => {
        setValue(value)
    };
    
    const handleInputChange = (inputValue) => {
        setInputValue(inputValue)
    };

    const handleKeyDown = (event) => {

        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
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



    useEffect(() => {

        const fetchData = async () => {
            const result = await getCompanyData(props.match.params.companyId)
            setDescription(result.data.description);
            setWebsite(result.data.website)
            setCompanyName(result.data.companyName)

        };

        fetchData();


    }, [props.match.params.companyId]);



    $(() => {
        $("#varRetrib").click(function () {
            if ($(this).is(":checked")) {
                $("#hasVarRetBox").show();
            } else {
                $("#hasVarRetBox").hide();
            }
        });
    });


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
    const noDropdown = {
        DropdownIndicator: null,
    };


    return (
        <div className='div-wrapper'>
            <>
                <img className='gamanfy-logo' src='/gamanfy_logo_blanco[6882].png' alt='logo-gamanfy' />
                <div>
                    <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                        <div>
                            <p className='p-signup'>
                                Para Publicar una oferta de trabajo, rellena los siguientes campos
                            </p>

                        </div>
                        <div><label>Puntuación </label></div>
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
                                <input className='checkbox-round' type="checkbox" name="hasSourcingWithInfluencer" onClick={handleTrueOrFalse} ref={register} />
                                Sourcing con Influencer
                            </label>
                        </div>

                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="hasExclusiveHeadHunter" onClick={handleTrueOrFalse} ref={register} />
                                Servicio exclusivo headhunting
                            </label>
                        </div>
                        <div><label>Servicios Adicionales</label></div>
                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="hasPersonalityTest" onClick={handleTrueOrFalse} ref={register} />

                                  Test de personalidad
                            </label>
                        </div>
                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="hasVideoInterview  " onClick={handleTrueOrFalse} ref={register} />
                                Video entrevista en diferido
                            </label>
                        </div>
                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="hasKitOnBoardingGamanfy  " onClick={handleTrueOrFalse} ref={register} />
                                Kit onboarding Gamanfy
                            </label>
                        </div>

                        <div>
                            <label>Datos de la Empresa</label>
                            <div>
                                <input
                                    type="text"
                                    name="companyName"
                                    className='form-control signup-fields mx-auto'
                                    ref={register({ required: true })}
                                    defaultValue={companyName}
                                    placeholder='Nombre de la empresa' />

                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="description"
                                    className='form-control signup-fields mx-auto'
                                    ref={register({ required: true })}
                                    defaultValue={description}
                                    placeholder='Descripción' />

                                <div>
                                    <input
                                        type="text"
                                        name="website"
                                        className='form-control signup-fields mx-auto'
                                        ref={register({ required: true })}
                                        placeholder='Página web'
                                        defaultValue={website}
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="recruiter"
                                    className='form-control signup-fields mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Gestor del proceso de selección'
                                />
                            </div>
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
                            <input className="switch-button__checkbox" type="checkbox" id="switch-label" name="processState" onClick={handleTrueOrFalse} ref={register} />
                            <label htmlFor="switch-label" className="switch-button__label"></label>
                        </div>

                        <div>
                            <label >
                                <input className='checkbox-label' disabled />
                                <input className='checkbox-round' type="checkbox" name="isRemote" onClick={handleTrueOrFalse} ref={register} />
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

                            <div><label>Datos del Puesto de Trabajo</label></div>
                            <div>
                                <div><label>Misión principal</label></div>
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
                                <div><label>Descripción del puesto</label></div>
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
                                <div><label>Equipo</label></div>
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


                            <label>
                                Seleccione su sector
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
                        </div>
                        <div>


                        </div>

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
                            <input
                                type="text"
                                name="cityForOffer"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                placeholder='Ciudad' />
                        </div>
                        <div>
                            <label>
                                Dirección
                                 </label>

                            <div>
                                <input
                                    type="text"
                                    name="street"
                                    className='form-control signup-fields mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Calle' />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="number"
                                    className='form-control signup-fields mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Número' />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="zip"
                                    className='form-control signup-fields mx-auto'
                                    ref={register({ required: true })}
                                    placeholder='Código postal' />
                            </div>
                        </div>

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
                            <label>
                                Requisitos <br />
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
                                {!props.disabled && competences !== null && (<input name='keyComp' type='hidden' ref={register()} onChange={setCompetences} value={JSON.stringify(competences.map(comp => comp.value))} />)}


                            </div>
                        </>

                        <>
                            <div>
                                <label>Conocimientos Clave</label>
                                <CreatableSelect
                                    closeMenuOnSelect={false}
                                    theme={customTheme}
                                    inputValue={inputValue}
                                    onChange={handleChange}
                                    onInputChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    components={noDropdown}
                                    placeholder='Seleccionar'
                                    isMulti
                                    isClearable
                                    menuIsOpen={false}
                                    allowCreate={true}
                                    name="keyKnowledge"
                                    value={value}
                                    

                                />
                                {!props.disabled && value !== null && (<input name='keyKnowledge' type='hidden' ref={register()} onChange={handleChange}  value={JSON.stringify(value.map(val => val.value))}  />)}


                            </div>
                        </>

                        <div>
                            <div><label>Requisitos mínimos</label></div>
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

                                {!props.disabled && language !== null && (<input name='language' type='hidden' ref={register()} onChange={setLanguage} value={JSON.stringify(language.map(lang => lang.value))} />)}


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
                                {!props.disabled && benefits !== null && (<input name='benefits' type='hidden' ref={register()} onChange={setBenefits} value={JSON.stringify(benefits.map(ben => ben.value))} />)}

                            </div>
                        </>
                        <div className='mt-3'>
                            <input
                                type="text"
                                name="managerDescription"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                placeholder='Descripción y experiencia del responsable' />
                        </div>
                        <div className='mt-2'>
                            <input
                                type="text"
                                name="managerLinkedin"
                                className='form-control signup-fields mx-auto'
                                ref={register({ required: true })}
                                placeholder='URL Linkedin persona responsable' />
                        </div>



                        <p className='p-cacc'> <input type="submit" className='btn-cacc-su' style={{ width: '15em' }} value='Publicar oferta de trabajo' /> </p>
                    </form>
                </div>
            </>

        </div>

    )
}
