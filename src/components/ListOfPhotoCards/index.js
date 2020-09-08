import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import { PhotoCard } from '../PhotoCard/index'

const getPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(getPhotos)

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  return (
    <ul>
      {data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
      ))}
    </ul>
  )
}
