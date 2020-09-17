/* eslint-disable react/jsx-handler-names */
import React from 'react'

import { Form, Input, Button, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title, error, disabled, activateAuth }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await onSubmit({
        variables: {
          input: {
            email: email.value,
            password: password.value
          }
        }
      })
      activateAuth()
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
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>El usuario ya existe o hay algún problema.</Error>}
    </>
  )
}
