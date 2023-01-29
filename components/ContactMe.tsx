import React, { useEffect, useState } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';

type Props = {}

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}


const ContactMe = (props: Props) => {
  const { register, reset, handleSubmit, formState: { errors, isSubmitSuccessful, isValid }, getValues } = useForm<FormValues>();


  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    if (Object.values(formData).length === 4) {
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData as any,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
        .then(function (response) {
          reset();
          console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
          console.log('FAILED...', error);
        });
    }
    return

  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl  justify-center mx-auto items-center'>
      <h3 className='titleSection'>Contact</h3>

      <div className='flex flex-col space-y-4 md:space-y-10'>
        <h4 className='text-lg md:text:3xl font-semibold text-center'>
          Si puedo ayudarte,{' '}
          <strong className='strongWord'>hablemos.</strong>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-color5 h-7 w-7 animate-pulse' />
            <p className='text-base md:text:2xl'>+54 9 3515 580992</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-color5 h-7 w-7 animate-pulse' />
            <p className='text-base md:text:2xl'>ericdenislaura@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-color5 h-7 w-7 animate-pulse' />
            <p className='text-base md:text:2xl'>Córdoba, Argentina</p>
          </div>

        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-2 w-fit mx-auto mt-4'
      >
        <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-3'>
          {/* Nombre */}
          <div className="flex flex-col gap-1 items-start justify-center">
            <input
              placeholder="Nombre"
              className="inputContact"
              {
              ...register('name', {
                maxLength: 20,
                pattern: /[a-zA-Z\s:]/,
                required: true
              })
              }
            />
            <div className="inputInvalid">
              {
                errors.name?.type === 'pattern'
                  ? '--no uses caracteres especiales--'
                  : null
              }
              {
                errors.name?.type === 'maxLength'
                  ? '-- dudo que tenga más 20 caracteres -- '
                  : null
              }
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1 items-start justify-center">
            <input
              placeholder="Email"
              className="inputContact"
              {
              ...register('email', {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
              })
              }
            />
            <div className="inputInvalid">
              {
                errors.email?.type === 'pattern'
                  ? '-- email no valido --'
                  : null
              }
            </div>

          </div>
        </div>
        {/* Asunto */}
        <div className='w-full flex flex-col'>
          <input
            placeholder="Asunto"
            className="inputContact"
            {...register('subject', {
              maxLength: 60,
              required: true,
            })}
          />
          <span className="inputInvalid">
            {
              errors.subject?.type === 'maxLength'
                ? '-- un poco mas corto --'
                : null
            }
          </span>
        </div>
        {/* Mensaje */}
        <div className='w-full flex flex-col'>
          <textarea
            placeholder="Mensaje"
            className="inputContact"
            {...register('message', {
              maxLength: 300,
              required: true,
            })}
          />
          <span className="inputInvalid">
            {
              errors.message?.type === 'maxLength'
                ? '-- esta muy largo mejor programemos una reunion --'
                : null
            }
          </span>
        </div>

        <button
          className='buttonForm'
          type='submit'
          disabled={!isValid}
        >
          {isSubmitSuccessful ? 'Mensaje enviado' : "Enviar"}
        </button>
      </form>

    </div>
  )
}

export default ContactMe