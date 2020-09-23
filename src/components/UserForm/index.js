/* eslint-disable react/jsx-handler-names */
import React from 'react'

import { Form, Input, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../../SubmitButton/index'

export const UserForm = ({ onSubmit, title, error, disabled, activateAuth, data }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      onSubmit({
        variables: {
          input: {
            email: email.value,
            password: password.value
          }
        }
      }).then(({ data }) => {
        let token
        if (data && data.login) {
          token = data.login
        }
        if (data && data.signup) {
          token = data.signup
        }
        console.log(token)
        activateAuth(token)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <h2>{title}</h2>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>El usuario ya existe o hay algún problema.</Error>}
    </>
  )
}
