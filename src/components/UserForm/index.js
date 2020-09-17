/* eslint-disable react/jsx-handler-names */
import React from 'react'

import { Form, Input, Button, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { useRegister } from '../../hooks/useRegister'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const { register, error, loading } = useRegister()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register({
        variables: {
          input: {
            email: email.value,
            password: password.value
          }
        }
      })
      onSubmit()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Form disabled={loading} onSubmit={handleSubmit}>
        <h2>{title}</h2>
        <Input disabled={loading} placeholder='Email' {...email} />
        <Input disabled={loading} placeholder='Password' type='password' {...password} />
        <Button disabled={loading}>{title}</Button>
      </Form>
      {error && <Error>El usuario ya existe o hay algún problema.</Error>}
    </>
  )
}
