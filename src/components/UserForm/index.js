/* eslint-disable react/jsx-handler-names */
import React from 'react'

import { Form, Input, Button } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { useRegister } from '../../hooks/useRegister'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const register = useRegister()

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
      <h2>{title}</h2>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
