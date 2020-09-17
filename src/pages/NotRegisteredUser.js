import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegister } from '../hooks/useRegister'
import { useLogin } from '../hooks/useLogin'

export const NotRegisteredUser = () => {
  const { register, data: dataReg, error: errorReg, loading: loadingReg } = useRegister()
  const { login, data: dataLog, error: errorLog, loading: loadingLog } = useLogin()

  const errorMsgReg = errorReg && 'El usuario ya existe o hay algún problema'
  const errorMsgLog = errorLog && 'La contraseña no es correcta o el usuario no existe'
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        return (
          <>
            <UserForm error={errorMsgReg} disabled={loadingReg} onSubmit={register} activateAuth={activateAuth} title='Registrarse' />
            <UserForm error={errorMsgLog} disabled={loadingLog} onSubmit={login} activateAuth={activateAuth} title='Iniciar sesión' />
          </>
        )
      }}
    </Context.Consumer>
  )
}
