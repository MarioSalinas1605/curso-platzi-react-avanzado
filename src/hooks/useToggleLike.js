import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!){
  likePhoto(input: $input){
    id,
    likes,
    liked
  }
}
`

export function useToggleLike (id) {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO, { variables: { input: { id } } })

  return { toggleLikePhoto }
}
