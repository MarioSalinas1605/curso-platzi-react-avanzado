import React from 'react'

import { PhotoCardDetails } from '../components/PhotoCardDetail/index'
import { Layout } from '../components/Layout/index'

export const Detail = ({ detailId }) => (
  <Layout title={`Fotografia ${detailId}`}>
    <PhotoCardDetails id={detailId} />
  </Layout>
)
