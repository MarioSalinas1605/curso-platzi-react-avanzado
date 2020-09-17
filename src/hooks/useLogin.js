import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const LOGIN = gql`
mutation login ($input: UserCredentials!) {
    login (input: $input)
}
`

export function useLogin () {
  const [login, { data, loading, error }] = useMutation(LOGIN)

  return { login, data, loading, error }
}
