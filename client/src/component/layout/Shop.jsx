import React from 'react';
import { Hero } from './Hero/Hero';
import { Popular } from './Popular/Popular';
import { NewCollections } from './NewCollections/NewCollections';
export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <NewCollections/>
    </div>
  )
}
export default Shop