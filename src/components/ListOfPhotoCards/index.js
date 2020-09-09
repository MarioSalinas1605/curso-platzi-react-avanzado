import React from 'react'
import { useGetPhotos } from '../../hooks/useGetPhotos'

import { PhotoCard } from '../PhotoCard/index'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)

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
