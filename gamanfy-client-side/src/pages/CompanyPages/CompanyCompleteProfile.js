import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import countries from '../../countries.json';
import { sectors, numberOfEmployees } from '../../FolderForSelects/htmlSelects';
import '../../CSS/signupForm.css';
import AuthContext from '../../context/auth/authContext';
export const CompanyCompleteProfile = (props) => {

 
  const { register, handleSubmit, errors } = useForm();
  const countryNameState = countries.map(country => country.name.common);
  const authContext = useContext(AuthContext);
  const { toCompleteCompany } = authContext;
  const [handler, setHandler] = useState(false); 
  const handleTrueOrFalse = () => setHandler(!handler);

  const sectorType = sectors.map((doc, key) => {return <option key={key} value={doc}>{doc}</option>});
  const countryName = countryNameState.map((doc, key) => {return <option key={key} value={doc}>{doc}</option>});
  const employeesMap = numberOfEmployees.map((doc, key) => {return <option key={key} value={doc}>{doc}</option>});

  const onSubmit = (data) => {
    toCompleteCompany(props.match.params.companyId, data) 
  };


  return (
    <div className='div-wrapper'>
      <>
        <img className='gamanfy-logo' src='/LOGO_BLANCO_ALTA_CALIDAD_LARGO.png' alt='logo-gamanfy' />
        <div>
          <form className='signUp-form form-group mx-auto' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <div>
              <p className='p-signup'>
                Para completar tu cuenta, completa este formulario<br />con tus datos.

        </p>
            </div>
            {errors.sector && <span className='text-danger'>Este campo es obligatorio</span>}
            <div>
              <label>
                Selecciona tu Sector*
              <select
                  name='sector'
                  className= {errors.sector ?'form-control signup-fields-multi mx-auto border-danger': 'form-control signup-fields-multi mx-auto'}
                  ref={register({ required: true })}
                >
                <option value=''>Seleccionar</option>
                  {sectorType}
                </select>
              </label>
            </div>
                  {errors.companyName && <span className='text-danger'>Este campo es obligatorio</span>}
            <div>
              <input
                type="text"
                name="companyName"
                className={errors.companyName ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Nombre de la empresa*' />
            </div>

            {errors.description && <span className='text-danger'>Este campo es obligatorio</span>}
            <div>
              <textarea
                type="textarea"
                name="description"
                className={errors.description ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Descripción de la empresa*' />
            </div>
            
            {errors.taxId && <span className='text-danger'>Este campo es obligatorio</span>}     
            <div>
              <input
                type="text"
                name="taxId"
                className={errors.description ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Razón Social*' />
            </div>
            
            {errors.numberOfEmployees && <span className='text-danger'>Este campo es obligatorio</span>} 
            <div>
              <label>
                Número de trabajadores*
              <select
                  name='numberOfEmployees'
                  className={errors.numberOfEmployees ? 'form-control signup-fields-multi mx-auto border-danger': 'form-control signup-fields-multi mx-auto'}
                  ref={register({ required: true })}
                >
                <option value=''>Seleccionar</option>
                  {employeesMap}
                </select>
              </label>
            </div>

            {errors.countryName && <span className='text-danger'>Este campo es obligatorio</span>} 
            <div>
              <label>
                País*
              <select
                  name='countryName'
                  className={errors.countryName ? 'form-control signup-fields-multi  mx-auto border-danger': 'form-control signup-fields-multi  mx-auto'} 
                  ref={register({ required: true })}
                >
                <option value=''>Seleccionar</option>
                  {countryName}
                </select>
              </label>
            </div>

            {errors.provinceName && <span className='text-danger'>Este campo es obligatorio</span>} 
            <div>
              <input
                type="text"
                name="provinceName"
                className={errors.provinceName ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Provincia*' />
            </div>
            {errors.municipalityName && <span className='text-danger'>Este campo es obligatorio</span>} 
            <div>
              <input
                type="text"
                name="municipalityName"
                className={errors.municipalityName ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Municipio*' />
            </div>
            {errors.city && <span className='text-danger'>Este campo es obligatorio</span>} 
            <div>
              <input
                type="text"
                name="city"
                className={errors.city ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Ciudad*' />
            </div>

            <div>
              <label>
                Dirección*
                </label>
            </div>
            {errors.street && <span className='text-danger'>Este campo es obligatorio</span>} 
            <div>
              <input
                type="text"
                name="street"
                className={errors.street ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Calle*' />
            </div>
            {errors.number && <span className='text-danger'>Este campo es obligatorio</span>} 
            <div>
              <input
                type="text"
                name="number"
                className={errors.number ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Número*' />
            </div>
            {errors.zip && <span className='text-danger'>Este campo es obligatorio</span>} 
            <div>
              <input
                type="text"
                name="zip"
                className={errors.zip ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Código postal*' />
            </div>
            {errors.phoneNumber && <span className='text-danger'>Este campo es obligatorio</span>} 
            <div>
              <div>
                <input
                  type="text"
                  name="phoneNumber"
                  className={errors.phoneNumber ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                  ref={register({ required: true })}
                  placeholder='Teléfono de contacto' />
              </div>

              {errors.contactPerson && <span className='text-danger'>Este campo es obligatorio</span>} 
              <div>
                <input
                  type="text"
                  name="contactPerson"
                  className={errors.contactPerson ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                  ref={register({ required: true })}
                  placeholder='Persona de contacto*' />
              </div>

              {errors.website && <span className='text-danger'>Este campo es obligatorio</span>} 
              <input
                type="text"
                name="website"
                className={errors.website ? 'form-control signup-fields mx-auto border-danger': 'form-control signup-fields mx-auto'}
                ref={register({ required: true })}
                placeholder='Página web*' />
            </div>
            {errors.isCompleted && <span className='text-danger'>Este campo es obligatorio</span>} 
            <div>
              <p className='user-terms'>
               <input type='checkbox' name='isCompleted' onClick={handleTrueOrFalse} ref={register({required: true})}/> Al pulsar el botón de 'Completar mi perfil' aceptas y reconoces nuestros <u>Términos de uso</u> y <u>Politica de privacidad</u>
              </p>
            </div>
            <p className='p-cacc text-center'> <input type="submit" className='btn-cacc-su'  value='Completar mi perfil' /> </p>

          </form>
        </div>
      </>

    </div>


  )
}
