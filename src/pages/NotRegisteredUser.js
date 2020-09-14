import React from 'react'

import Context from '../Context'
import { UserForm } from '../components/UserForm/index'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <>
            <UserForm onSubmit={activateAuth} title='Registrarse' />
            <UserForm onSubmit={activateAuth} title='Iniciar Sesión' />
          </>
        )
      }
    }
  </Context.Consumer>
)
