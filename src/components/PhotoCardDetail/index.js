import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import { PhotoCard } from '../PhotoCard/index'

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto ($id: ID!){
       photo (id: $id){
          id
          categoryId
          src
          likes
          userId
          liked
       }
    }
 `

export const PhotoCardDetails = ({ id }) => {
  const { data, loading } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })

  return (
    <>
      {loading
        ? <PhotoCard />
        : <PhotoCard {...data.photo} />}
    </>
  )
}
