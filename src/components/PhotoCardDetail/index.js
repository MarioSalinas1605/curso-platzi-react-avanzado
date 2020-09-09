import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import { PhotoCard } from '../PhotoCard/index'

export const PhotoCardDetails = ({ id }) => {
  const query = gql`
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

  const { data, loading } = useQuery(query, { variables: { id } })

  return (
    <>
      {loading
        ? <PhotoCard />
        : <PhotoCard {...data.photo} />}
    </>
  )
}
