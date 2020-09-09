import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export function useGetPhotos (categoryId) {
  const getPhotos = gql`
    query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `

  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId } })

  return { loading, error, data }
}
