import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_FAVS = gql`
query getFavs {
  favs {
    categoryId
    src
    likes
    userId
  }
}
`

export function useGetFavorites () {
  const { data, loading, error } = useQuery(GET_FAVS, { fetchPolicy: 'network-only' })
  return { data, loading, error }
}