import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useForm, SubmitHandler } from "react-hook-form";
import { Validate } from '@/utils';
type Props = {}

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}


const ContactMe = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='titleSection'>Contact</h3>

      <div className='flex flex-col space-y-4 md:space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          Si puedo ayudarte{' '}
          <strong className='strongWord'>Hablemos</strong>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-color5 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+591 73097600</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-color5 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>ericdenislaura@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-color5 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Córdoba, Argentina</p>
              <p className='text-color5 font-medium text-lg'>{errors.email?.message}</p>
          </div>
     
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-3 w-fit mx-auto'
      >
        <div className='flex space-x-3'>
          <input
            placeholder='Nombre'
            className='inputContact'
            type="text"
            {...register("name")}
          />
          <input
            {
            ...register('email', {
              required: 'Este campo es requerido',
              validate: (val) => Validate.isEmail(val)  // tambien se puede escribir validations.isEmail
            })
            }
            placeholder='Correo'
            className='inputContact'
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder='Asunto'
          className='inputContact'
          type="text"
        />

        <textarea
          {...register("message")}
          placeholder='Mensaje'
          className='inputContact'
        />

        <button
          className='buttonForm'
          type='submit'
        >
          Enviar
        </button>
      </form>

    </div>
  )
}

export default ContactMe