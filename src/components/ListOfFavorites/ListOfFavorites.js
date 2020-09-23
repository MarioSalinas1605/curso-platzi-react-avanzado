import React from 'react'
import { useGetFavorites } from '../../hooks/useGetFavorites'
import { Grid, Image, Link } from './styles'

export function ListOfFavorites () {
  const { loading, error, data } = useGetFavorites()
  if (loading) {
    return <p>Loading</p>
  }
  if (error) {
    return <p>Error!</p>
  }

  const { favs } = data

  return (
    <Grid>
      {favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}> <Image src={fav.src} /> </Link>)}
    </Grid>
  )
}
