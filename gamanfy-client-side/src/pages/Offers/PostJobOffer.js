import React, { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useForm } from "react-hook-form";
import { postOffer } from '../../api/offers';
// import { getCompanyData } from '../../api/auth.api';
// import countries from '../../countries.json';
// import { userBenefits } from '../../FolderForSelects/userBenefits';
import '../../CSS/postOffer.css';
import $ from "jquery";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { competencesJS } from '../../FolderForSelects/competencesJS';
import { languageOptions } from '../../FolderForSelects/languageOptions';
import { sectors, contracts, experience } from '../../FolderForSelects/htmlSelects';
import { Calendly } from '../CompanyPages/Calendly';
import Modal from "react-bootstrap/Modal";
import { getCompanyData } from '../../api/users';
import Loader from 'react-loader-spinner';

export const PostJobOffer = (props) => {

    // const [, setDescription] = useState('');
    // const [, setCompanyName] = useState('');
    // const [, setWebsite] = useState('');
    // const [benefits, setBenefits] = useState([]);
    // const countryName = countryNameState.map(countryName => countryName);
    // const [minStudies, setMinStudies] = useState(studies);
    // const [countryNameState, setCountryNameState] = useState(countries.map(country => country.name.common));
    // const [category, setCategory] = useState(categories);
    const animatedComponents = makeAnimated();
    const [inputFileError, setInputFileError] = useState('');
    const [content, setContent] = useState()
    const { register, handleSubmit, errors } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [handler, setHandler] = useState(false);
    const [sector, setSector] = useState(sectors);
    const [contract, setContract] = useState(contracts);
    const [minExp, setMinExp] = useState(experience);
    const [language, setLanguage] = useState([]);
    const [competences, setCompetences] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([]);
    const [inputFileValue, setInputFileValue] = useState(undefined)
    const [isValidated, setIsValidated] = useState(true)
    const [isOpen, setIsOpen] = useState(true);
    const [contractError, setContractError] = useState(false)
    // const categoryNameMap = category.map(categoryNameMap => categoryNameMap);
    // const minStudiesMap = minStudies.map(minStudiesMap => minStudiesMap);
    const sectorTypeMap = sector.map(sectorTypeMap => sectorTypeMap);
    const contractNameMap = contract.map(contractNameMap => contractNameMap);
    const minExpMap = minExp.map(minExpMap => minExpMap);

    // const handleStudies = () => setMinStudies(minStudiesMap);
    // const handleCountryName = () => setCountryNameState(countryName);
    // const handleCategory = () => setCategory(categoryNameMap);
    const handleTrueOrFalse = () => setHandler(!handler);
    const handleSector = () => setSector(sectorTypeMap);
    const handleContract = () => setContract(contractNameMap);
    const handleMinExp = () => setMinExp(minExpMap);

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

    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
        setContent(content)
    }

    const handleKeyDown = (event) => {
        event = event || window.event
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
            case 13:
            case 229:
            case 32:
                setInputValue('')
                if (value !== null) {
                    setValue([...value, createOption(inputValue)])
                } else {
                    setValue([createOption(inputValue)])
                }
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

    // let socialBenefits = userBenefits.map((ben, index) => {
    //     return {
    //         label: ben.label,
    //         value: ben.value,
    //         key: index
    //     }
    // })

    const hideModal = () => {
        setIsOpen(false);
    };

    const handleInputFileChange = (e) => {
        setInputFileValue(e.target.files[0].name)

    }


    const onSubmit = async (data) => {
        console.log(data.contract)
        setIsLoading(true);
        const formData = new FormData();

        if (data.offerPicture[0] === undefined || data.offerPicture === null) {
            setInputFileError('Este campo es obligatorio')
        }
        if (data.contract === 'Seleccionar') {
            setContractError(true);
        }
        data.jobDescription = content
        formData.append('offerPicture', data.offerPicture[0]);
        formData.append('jobName', data.jobName);
        formData.append('sector', data.sector);
        formData.append('category', data.category);
        formData.append('contract', data.contract);
        formData.append('minGrossSalary', data.minGrossSalary);
        formData.append('maxGrossSalary', data.maxGrossSalary);
        formData.append('variableRetribution', data.variableRetribution);
        formData.append('quantityVariableRetribution', data.quantityVariableRetribution);
        formData.append('showMoney', data.showMoney);
        formData.append('mainMission', data.mainMission);
        formData.append('jobDescription', content);
        formData.append('team', data.team);
        formData.append('isRemote', data.isRemote);
        formData.append('recruiter', data.recruiter);
        formData.append('onDate', data.onDate);
        formData.append('offDate', data.offDate);
        formData.append('processState', data.processState);
        formData.append('personsOnCharge', data.personsOnCharge);
        formData.append('countryName', data.countryName);
        formData.append('cityForOffer', data.cityForOffer);
        formData.append('street', data.street);
        formData.append('number', data.number);
        formData.append('zip', data.zip);
        formData.append('minExp', data.minExp);
        formData.append('minStudies', data.minStudies);
        formData.append('keyComp', data.keyComp);
        formData.append('keyKnowledge', data.keyKnowledge);
        formData.append('minReqDescription', data.minReqDescription);
        formData.append('language', data.language);
        formData.append('benefits', data.benefits);
        formData.append('scorePerRec', data.scorePerRec);
        formData.append('moneyPerRec', data.moneyPerRec);
        formData.append('hasSourcingWithInfluencer', data.hasSourcingWithInfluencer);
        formData.append('hasExclusiveHeadHunter', data.hasExclusiveHeadHunter);
        formData.append('hasPersonalityTest', data.hasPersonalityTest);
        formData.append('hasVideoInterview', data.hasVideoInterview);
        formData.append('hasKitOnBoardingGamanfy', data.hasKitOnBoardingGamanfy);
        await postOffer(props.match.params.companyId, formData)
        document.location.reload()
    };

    useEffect(() => {

        const fetchData = async () => {
            const result = await getCompanyData(props.match.params.companyId)
            // setDescription(result.data.user.description);
            // setWebsite(result.data.user.website)
            // setCompanyName(result.data.user.companyName)
            setIsValidated(result.data.user.isValidated)

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

    const isNotMobile = window.innerWidth < 1024

    return (
        <div className='p-0'>
            {
                !isValidated ?
                    <Modal className='modal-calendly' show={isOpen} onHide={hideModal}>
                        <Modal.Header>
                            <Modal.Title>
                                <h4 className='p-modal-offer'>Elije una fecha para que te hagamos una llamada de seguimiento</h4>
                                <p className='p-inputs mt-5' style={{ fontSize: '.7em', marginTop: '1.5em' }}>Para mejorar la experiencia de contratación y la experiencia comercial, nos gustaría tener una llamda de 15 minutos con vosotros para definir mejor cómo ofreceremos nuestros servicios. </p>
                            </Modal.Title>
                        </Modal.Header>
                        <Calendly />
                    </Modal>
                    :

                    <>
                        <h3 className=' text-center mt-1'>Publicar Oferta</h3>

                        <form className='mx-auto mb-3' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

                            <input
                                type="hidden"
                                name="scorePerRec"
                                className='form-control  mx-auto'
                                ref={register}
                                defaultValue='20'
                                placeholder='Puntuación por Recomendación' />

                            <div className='signUp-form  mx-auto'>
                                {errors.jobName && <span className='text-danger'>  Este campo es obligatorio </span>}
                                <div>
                                    <label>Cargo*</label>
                                    <input
                                        type="text"
                                        name="jobName"
                                        className={errors.jobName ? 'text-danger border-danger form-control  mx-auto' : 'form-control  mx-auto'}
                                        ref={register({ required: true })}
                                        placeholder='Nombre del puesto' />
                                </div>

                                {errors.cityForOffer && <span className='text-danger'> {errors.cityForOffer.message ? errors.cityForOffer.message : 'Este campo es obligatorio'} </span>}
                                <div >
                                    {/* (?=.*[A-Z]) check at least one Cap */}
                                    <label>Ubicación*</label>
                                    <input
                                        type="text"
                                        name="cityForOffer"
                                        className={errors.cityForOffer ? 'form-control  mx-auto border-danger' : 'form-control  mx-auto'}
                                        ref={register({ required: true, pattern: { value: /(?=.*[A-Z])/, message: 'La primera letra debe estar en Mayúscula' } })}
                                        placeholder='Ciudad'
                                    />
                                </div>

                                <label>
                                    Sector
                                        <select
                                        name='sector'
                                        className='form-control  mx-auto'
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

                                {errors.offerPicture && <span className='text-danger'>  Este campo es obligatorio </span>}
                                <div className='div-logo'>
                                    <label>Logo de la Empresa*</label>
                                    <label htmlFor='logo-upload' className={errors.offerPicture ? 'border-danger form-control  fields-rec mx-auto label-cv' : 'form-control  fields-rec mx-auto label-cv'}>{inputFileValue === undefined ? 'Logo de la Empresa*' : inputFileValue.substring(22, -1) + '...'}</label>
                                    {
                                        !isNotMobile ?
                                            <label className='browse-files-company' htmlFor='logo-upload'>Explorar archivos</label>
                                            :
                                            <label htmlFor='logo-upload' ><i className="fas fa-upload company-logo-upload"></i></label>
                                    }
                                    <input
                                        id='logo-upload'
                                        onChange={handleInputFileChange}
                                        type="file"
                                        name="offerPicture"
                                        className={inputFileError ? ' text-danger border-danger form-control  mx-auto upload-logo' : 'form-control  mx-auto upload-logo'}
                                        ref={register({ required: true })}
                                    />
                                </div>
                            </div>


                            <div className='signUp-form  mx-auto'>
                                <label><h5>Datos de la Oferta</h5></label>
                                <div>

                                    {contractError && <span className='text-danger'>  Este campo es obligatorio </span>}
                                    <label>
                                        Tipo de Contrato*
                                        <select
                                            name="contract"
                                            className={contractError ? 'border-danger text-danger form-control  mx-auto' : 'form-control  mx-auto'}
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

                                    {errors.contract && (<p style={{ color: "red" }}> {errors.contract.message}</p>)}
                                </div>

                                <div>
                                    <label >
                                        <input className='checkbox-round' type="checkbox" name="isRemote" onClick={handleTrueOrFalse} ref={register} />
                                    ¿El puesto es para ser realizado en remoto/ teletrabajo?
                                    </label>
                                </div>

                                {(errors.offDate || errors.offDate) && <span className='text-danger'>Este campo es obligatorio</span>}
                                <div>
                                    <label>Fecha de inicio/ fin del proceso*</label>
                                    <div className='d-flex flex-row justify-content-center '>
                                        <input
                                            type="date"
                                            name="onDate"
                                            className={errors.onDate ? 'form-control  mx-auto text-danger border-danger salaryAndDateWidth' : 'form-control  mx-auto salaryAndDateWidth'}
                                            ref={register({ required: true })}
                                        />
                                        <input
                                            type="date"
                                            name="offDate"
                                            className={errors.offDate ? 'form-control  mx-auto text-danger border-danger salaryAndDateWidth' : 'form-control  mx-auto salaryAndDateWidth'}
                                            ref={register({ required: true })}
                                        />
                                    </div>

                                </div>

                                <div>
                                    {errors.minExp && <span className='text-danger'>Este campo es obligatorio</span>}
                                    <label>
                                        Nivel de antigüedad*
                                        <select
                                            name='minExp'
                                            className={errors.minExp ? 'text-danger border-danger form-control  mx-auto' : 'form-control  mx-auto'}
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

                                <div className='mt-2'>
                                    <label>Añade aptitudes como palabras clave</label>
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
                            </div>

                            <div className='signUp-form  mx-auto'>
                                <label ><h5 >Paquete retributivo</h5></label>

                                {(errors.minGrossSalary || errors.maxGrossSalary) && <span className='text-danger'>Este campo es obligatorio</span>}
                                <div>
                                    <label>Salario mínimo/ máximo anual*</label> <br />
                                    <div className='d-flex flex-row justify-content-center '>

                                        <input
                                            type="text"
                                            name="minGrossSalary"
                                            className={errors.minGrossSalary ? 'text-danger border-danger form-control  mx-auto salaryAndDateWidth' : 'form-control  mx-auto salaryAndDateWidth'}
                                            ref={register({ required: true })}
                                            placeholder='xx.xxx€'
                                        />


                                        <input
                                            type="text"
                                            name="maxGrossSalary"
                                            className={errors.maxGrossSalary ? 'text-danger border-danger form-control  mx-auto salaryAndDateWidth' : 'form-control  mx-auto salaryAndDateWidth'}
                                            ref={register({ required: true })}
                                            placeholder='xx.xxx€'
                                        />

                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <label>
                                        <input className='checkbox-round ' type="checkbox" id="varRetrib" name='variableRetribution'
                                            onClick={handleTrueOrFalse} ref={register} />
                                        <label htmlFor="varRetrib" ></label>
                                        Retribución variable
                                        </label>
                                </div>

                                <div id="hasVarRetBox" style={{ display: 'none' }}>
                                    <input name='quantityVariableRetribution' className='form-control  mx-auto' ref={register} placeholder='Cantidad variable %' />
                                </div>

                                <div>
                                    <label className='mt-3'>
                                        <input className='checkbox-round ' type="checkbox" name='showMoney'
                                            onClick={handleTrueOrFalse} ref={register} />
                                    Mostrar el salario en la oferta
                                    </label>
                                </div>
                                </div>

                                <div>
                                    <div className='ml-5 mr-5 editor-div'>
                                        <label>Descripción del puesto*</label>
                                        
                                            { isNotMobile
                                                ?
                                                <Editor
                                                    apiKey='fxoz1g68te9coe29qvzmtxgaiourw6txysajjxgzo6wjnian'
                                                    initialValue="<p style='color: #050D4D'> Descripción del empleo<p>"
                                                    init={{
                                                        height: '16em',
                                                        plugins: [
                                                            'advlist autolink lists link image preview charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount'
                                                        ],
                                                        link_default_protocol: 'https',

                                                        toolbar:
                                                            'undo redo | bold italic backcolor| \n' +
                                                            'alignleft aligncenter alignright alignjustify | \n' +
                                                            'bullist numlist outdent indent | link | image | preview |',
                                                        menubar: false,
                                                    }}
                                                    onEditorChange={handleEditorChange} />
                                                : 
                                                <Editor
                                                    apiKey='fxoz1g68te9coe29qvzmtxgaiourw6txysajjxgzo6wjnian'
                                                    initialValue="<p style='color: #050D4D'> Descripción del empleo<p>"
                                                    init={{
                                                        height: '16em',
                                                        plugins: [
                                                            'advlist autolink lists link image preview charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount'
                                                        ],
                                                        link_default_protocol: 'https',

                                                        toolbar:
                                                            'undo redo | formatselect | bold italic backcolor| \n' +
                                                            'alignleft aligncenter alignright alignjustify | \n' +
                                                            'bullist numlist outdent indent | removeformat | link | image | preview | help',
                                                        menubar: false,
                                                    }}
                                                    onEditorChange={handleEditorChange} />
                                            }
                                        
                                    </div>
                                </div>
                                <label><a className='conditions-offer' href='https://gamanfy.com/empresas/condicionesdelservicio'>Condiciones del servicio</a></label>
                            {
                                isLoading ?
                                    <Loader type="ThreeDots" color="rgb(255, 188, 73)" height={80} width={80} style={{ marginLeft: '45em' }} />
                                    :
                                    <button type="submit" style={{ width: '18em' }} className='btn-cacc border-0 d-block mx-auto mt-3 mb-4'> Publicar Oferta de Trabajo</button>
                            }
                        </form>

                    </>
            }

        </div>

    )
}

                        //     <div className='signUp-form  mx-auto'>
                        //         <h4 style={{ color: '#050D4D', fontWeight: 600 }}>Datos de la Oferta</h4>
                        //         <div>
                        //             <label>Cargo*</label>
                        //             <input
                        //                 type="text"
                        //                 name="jobName"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Nombre del puesto' />
                        //         </div>
                        //         <div className='div-logo'>
                        //             <p className='text-danger'>{inputFileError}</p>
                        //             <label htmlFor='logo-upload' className={inputFileError ? 'text-danger form-control  fields-rec mx-auto label-cv' : 'form-control  fields-rec mx-auto label-cv'}>{inputFileValue === undefined ? 'Logo de la Empresa' : inputFileValue.substring(22, -1) + '...'}</label>
                        //             {
                        //                 !isNotMobile ?
                        //                     <label className='browse-files-company' htmlFor='logo-upload'>Explorar archivos</label>
                        //                     :
                        //                     <label htmlFor='logo-upload' ><i className="fas fa-upload"></i></label>
                        //             }
                        //             <input
                        //                 id='logo-upload'
                        //                 onChange={handleInputFileChange}
                        //                 type="file"
                        //                 name="offerPicture"
                        //                 className='form-control  mx-auto upload-logo'
                        //                 ref={register}
                        //             />
                        //         </div>
                        //         <label>
                        //             Sector
                        //          <select
                        //                 name='sector'
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 onChange={e => handleSector(e)}
                        //             >
                        //                 {
                        //                     sectorTypeMap.map((doc, key) => {

                        //                         return <option key={key} value={doc}>{doc}</option>;

                        //                     })

                        //                 }
                        //             </select>
                        //         </label>

                        //         <div>
                        //             <label>
                        //                 Categoría
                        //      <select
                        //                     name='category'
                        //                     className='form-control  mx-auto'
                        //                     ref={register({ required: true })}
                        //                     onChange={e => handleCategory(e)}
                        //                 >
                        //                     {
                        //                         categoryNameMap.map((doc, key) => {
                        //                             return <option key={key} value={doc}>{doc}</option>;
                        //                         })

                        //                     }
                        //                 </select>
                        //             </label>
                        //         </div>

                        //         <div>
                        //             <label>
                        //                 Tipo de Contrato
                        //                 <select
                        //                     name='contract'
                        //                     className='form-control  mx-auto'
                        //                     ref={register({ required: true })}
                        //                     onChange={e => handleContract(e)}
                        //                 >
                        //                     {
                        //                         contractNameMap.map((doc, key) => {
                        //                             return <option key={key} value={doc}>{doc}</option>;
                        //                         })

                        //                     }
                        //                 </select>
                        //             </label>
                        //         </div>

                        //         <div>
                        //             <input
                        //                 type="text"
                        //                 name="minGrossSalary"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Salario mínimo anual bruto €' />
                        //         </div>
                        //         <div>
                        //             <input
                        //                 type="text"
                        //                 name="maxGrossSalary"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Salario máximo bruto anual €   ' />
                        //         </div>

                        //         <div>
                        //             <label>

                        //                 <input className='checkbox-round ' type="checkbox" id="varRetrib" name='variableRetribution'
                        //                     onClick={handleTrueOrFalse} ref={register} />
                        //                 <label htmlFor="varRetrib" ></label>

                        //     Retribución variable
                        //  </label>

                        //         </div>

                        //         <div id="hasVarRetBox" style={{ display: 'none' }}>
                        //             <input name='quantityVariableRetribution' className='form-control  mx-auto' ref={register} placeholder='Cantidad variable %' />

                        //         </div>

                        //         <div>

                        //             <label>
                        //                 <input className='checkbox-round ' type="checkbox" name='showMoney'
                        //                     onClick={handleTrueOrFalse} ref={register} />

                        //                 Mostrar el salario en la oferta
                        //         </label>
                        //         </div>

                        //         <div>
                        //             <label>Misión principal</label>
                        //             <textarea
                        //                 style={{ height: '6em' }}
                        //                 type="textarea"
                        //                 name="mainMission"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Indica en una frase la misión principal del puesto de trabajo'
                        //                 maxLength="4000"
                        //             />
                        //         </div>

                        //         <div>
                        //             <label>Descripción del puesto</label>
                        //             <textarea
                        //                 style={{ height: '6em' }}
                        //                 type="textarea"
                        //                 name="jobDescription"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Indica en una frase la misión principal del puesto de trabajo'
                        //                 maxLength="4000"
                        //             />
                        //         </div>

                        //         <div>
                        //             <label>Equipo</label>
                        //             <textarea
                        //                 style={{ height: '6em' }}
                        //                 type="textarea"
                        //                 name="team"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Describe en que entorno y equipo va a trabajar'
                        //                 maxLength="4000"
                        //             />
                        //         </div>

                        //         <div>
                        //             <label >
                        //                 <input className='checkbox-round' type="checkbox" name="isRemote" onClick={handleTrueOrFalse} ref={register} />
                        //                 ¿El puesto es para ser realizado en remoto/ teletrabajo?
                        //             </label>
                        //         </div>

                        //         <div>
                        //             <label>Responsable</label>
                        //             <input
                        //                 type="text"
                        //                 name="recruiter"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Gestor del proceso de selección'
                        //             />
                        //         </div>


                        //         <div>
                        //             <label>Fecha de inicio</label>
                        //             <input
                        //                 type="date"
                        //                 name="onDate"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //             />
                        //         </div>

                        //         <div>
                        //             <label>Fecha final</label>
                        //             <input
                        //                 type="date"
                        //                 name="offDate"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //             />
                        //         </div>

                        //         <div className="switch-button">
                        //             <label>Estado del proceso</label>
                        //             <input className="switch-button__checkbox" type="checkbox" id="switch-label" name="processState" onClick={handleTrueOrFalse} ref={register} />
                        //             <label htmlFor="switch-label" className="switch-button__label"></label>
                        //         </div>

                        //         <div>
                        //             <input
                        //                 type="text"
                        //                 name="personsOnCharge"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Personas a cargo' />
                        //         </div>
                        //     </div>



                        //     <div className='signUp-form mx-auto'>
                        //         <h4 style={{ color: '#050D4D', fontWeight: 600 }}>Detalles de Localización</h4>

                        //         <div>
                        //             <label>
                        //                 País
                        //      <select
                        //                     name='countryName'
                        //                     className='form-control  mx-auto'
                        //                     ref={register({ required: true })}
                        //                     onChange={e => handleCountryName(e)}
                        //                 >
                        //                     {
                        //                         countryName.map((doc, key) => {
                        //                             return <option key={key} value={doc}>{doc}</option>;
                        //                         })

                        //                     }
                        //                 </select>
                        //             </label>
                        //         </div>
                        //         {errors.cityForOffer && <span> {errors.cityForOffer.message ? errors.cityForOffer.message : 'Este campo es obligatorio'} </span>}


                        //         <div>
                        //             {/* (?=.*[A-Z]) check at least one Cap */}
                        //             <label>Ciudad</label>
                        //             <input
                        //                 type="text"
                        //                 name="cityForOffer"
                        //                 className={errors.cityForOffer ? 'form-control  mx-auto border-danger' : 'form-control  mx-auto'}
                        //                 ref={register({ required: true, pattern: { value: /(?=.*[A-Z])/, message: 'La primera letra debe estar en Mayúscula' } })}
                        //                 placeholder='Ciudad'
                        //             />
                        //         </div>

                        //         <div>
                        //             <label>Calle</label>
                        //             <input
                        //                 type="text"
                        //                 name="street"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Calle' />
                        //         </div>

                        //         <div>
                        //             <label>Número</label>
                        //             <input
                        //                 type="text"
                        //                 name="number"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Número' />
                        //         </div>

                        //         <div>
                        //             <label>Código Postal</label>
                        //             <input
                        //                 type="text"
                        //                 name="zip"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Código postal' />
                        //         </div>

                        //     </div>

                        //     <div className='signUp-form  mx-auto'>

                        //         <h4 style={{ color: '#050D4D', fontWeight: 600 }}>Requisitos</h4>

                        //         <div>
                        //             <label>
                        //                 Experiencia Mínima
                        //      <select
                        //                     name='minExp'
                        //                     className='form-control  mx-auto'
                        //                     ref={register({ required: true })}
                        //                     onChange={e => handleMinExp(e)}
                        //                 >
                        //                     {
                        //                         minExpMap.map((doc, key) => {
                        //                             return <option key={key} value={doc}>{doc}</option>;
                        //                         })

                        //                     }
                        //                 </select>
                        //             </label>
                        //         </div>

                        //         <div>
                        //             <label>
                        //                 Estudios Mínimos
                        //      <select
                        //                     name='minStudies'
                        //                     className='form-control  mx-auto'
                        //                     ref={register({ required: true })}
                        //                     onChange={e => handleStudies(e)}
                        //                 >
                        //                     {
                        //                         minStudies.map((doc, key) => {
                        //                             return <option key={key} value={doc}>{doc}</option>;
                        //                         })

                        //                     }
                        //                 </select>
                        //             </label>
                        //         </div>

                        //         <div>
                        //             <label>Competencias Clave</label>
                        //             <Select
                        //                 closeMenuOnSelect={false}
                        //                 theme={customTheme}
                        //                 components={animatedComponents}
                        //                 placeholder='Seleccionar'
                        //                 isMulti
                        //                 isSearchable
                        //                 options={competencesToSet}
                        //                 onChange={setCompetences}
                        //                 noOptionsMessage={() => 'No existen más opciones'}
                        //                 name="keyComp"
                        //                 value={competences}
                        //             />
                        //             {!props.disabled && competences !== null && (<input name='keyComp' type='hidden' ref={register} onChange={setCompetences} value={JSON.stringify(competences.map(comp => comp.value))} />)}

                        //         </div>


                        //         <div className='mt-2'>
                        //             <label>Conocimientos Clave</label>
                        //             <CreatableSelect
                        //                 closeMenuOnSelect={false}
                        //                 theme={customTheme}
                        //                 inputValue={inputValue}
                        //                 onChange={handleChange}
                        //                 onInputChange={handleInputChange}
                        //                 onKeyDown={handleKeyDown}
                        //                 components={components}
                        //                 placeholder='Seleccionar'
                        //                 isMulti
                        //                 isClearable
                        //                 menuIsOpen={false}
                        //                 name="keyKnowledge"
                        //                 value={value}
                        //             />
                        //             {!props.disabled && value !== null && (<input name='keyKnowledge' type='hidden' ref={register} onKeyDown={handleKeyDown} onChange={handleChange} value={JSON.stringify(value.map(val => val.value))} />)}


                        //         </div>



                        //         <div className='mt-2'>
                        //             <label>Requisitos mínimos</label>
                        //             <textarea
                        //                 style={{ height: '8em' }}
                        //                 type="textarea"
                        //                 name="minReqDescription"
                        //                 className='form-control  mx-auto'
                        //                 ref={register({ required: true })}
                        //                 placeholder='Indica experiencia, disponibilidad, certificaciones y otros requisitos imprescindibles para el puesto. (Máx. 4000 caracteres)'
                        //                 maxLength="4000"
                        //             />
                        //         </div>


                        //             <div>
                        //                 <label>Idiomas</label>
                        //                 <Select

                        //                     closeMenuOnSelect={false}
                        //                     theme={customTheme}
                        //                     components={animatedComponents}
                        //                     placeholder='Seleccionar'
                        //                     isMulti
                        //                     isSearchable
                        //                     options={languageOptionsToSet}
                        //                     onChange={setLanguage}
                        //                     noOptionsMessage={() => 'No existen más opciones'}
                        //                     name="language"
                        //                     value={language}
                        //                 />

                        //                 {!props.disabled && language !== null && (<input name='language' type='hidden' ref={register} onChange={setLanguage} value={JSON.stringify(language.map(lang => lang.value))} />)}

                        //             </div>


                        //         <>
                        //             <div>
                        //                 <label>Beneficios Sociales</label>
                        //                 <Select
                        //                     closeMenuOnSelect={false}
                        //                     theme={customTheme}
                        //                     components={animatedComponents}
                        //                     placeholder='Seleccionar'
                        //                     isMulti
                        //                     isSearchable
                        //                     options={socialBenefits}
                        //                     onChange={setBenefits}
                        //                     noOptionsMessage={() => 'No existen más opciones'}
                        //                     name="benefits"
                        //                     value={benefits}
                        //                 />
                        //                 {!props.disabled && benefits !== null && (<input name='benefits' type='hidden' ref={register} onChange={setBenefits} value={JSON.stringify(benefits.map(ben => ben.value))} />)}

                        //             </div>
                        //         </>
                        //     </div>


                        //     <div className='signUp-form mx-auto'>
                        //         <h4 style={{ color: '#050D4D', fontWeight: 600 }}>Detalles Adicionales</h4>
                        //         <div>
                        //             <input
                        //                 type="hidden"
                        //                 name="scorePerRec"
                        //                 className='form-control  mx-auto'
                        //                 ref={register}
                        //                 defaultValue='5'
                        //                 placeholder='Puntuación por Recomendación' />
                        //         </div>

                        //         <div>
                        //             <input
                        //                 type="hidden"
                        //                 name="moneyPerRec"
                        //                 className='form-control  mx-auto'
                        //                 ref={register}
                        //                 placeholder='Recompensa por recomendación €' />
                        //         </div>

                        //         <label>Servicios de Contratación</label>
                        //         <label>¿Cómo quieres llevar a cabo la selección?</label>
                        //         <div>
                        //             <label>
                        //                 <input className='checkbox-round' type="checkbox" name="hasSourcingWithInfluencer" onClick={handleTrueOrFalse} ref={register} />
                        //                 Sourcing con Influencer
                        //         </label>
                        //         </div>

                        //         <div>
                        //             <label>
                        //                 <input className='checkbox-round' type="checkbox" name="hasExclusiveHeadHunter" onClick={handleTrueOrFalse} ref={register} />
                        //                 Servicio exclusivo headhunting
                        //         </label>
                        //         </div>
                        //         <p className='p-inputs p-u-postJob text-left mt-2'><u><a style={{ color: '#050D4D' }} href='https://gamanfy.com/serviciosdecontratación'>¿Qué es esto?</a></u></p>
                        //         <div>
                        //             <label>Servicios Adicionales</label><br />
                        //             <label>
                        //                 <input className='checkbox-round' type="checkbox" name="hasPersonalityTest" onClick={handleTrueOrFalse} ref={register} />

                        //                 Test de personalidad (Servicio Premium)
                        //         </label>

                        //             <label >
                        //                 <input className='checkbox-round' type="checkbox" name="hasVideoInterview" onClick={handleTrueOrFalse} ref={register} />
                        //                 Video entrevista en diferido (Servicio Premium)
                        //             </label>

                        //             <label >
                        //                 <input className='checkbox-round' type="checkbox" name="hasKitOnBoardingGamanfy" onClick={handleTrueOrFalse} ref={register} />
                        //                 Kit onboarding Gamanfy (Servicio Premium)
                        //         </label>
                        //         </div>
                        //         <p><a className='a-conditions' href='https://gamanfy.com/serviciosdecontratación'>¿Condiciones del servicio?</a></p>
                        //     </div>