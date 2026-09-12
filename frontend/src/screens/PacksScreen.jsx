import React from 'react';
import CollectionPage from '../components/CollectionPage';
import EmptyState from '../components/EmptyState';
// No approved pack catalogue exists. Do not infer packs from sauce records.
export default function PacksScreen() {
  return <CollectionPage title="Packs" eyebrow="Burnsville collection"><EmptyState title="Packs are not currently available." to="/shop" action="Explore all sauces" /></CollectionPage>;
}
