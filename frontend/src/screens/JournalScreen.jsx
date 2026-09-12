import React from 'react';
import CollectionPage from '../components/CollectionPage';
import EmptyState from '../components/EmptyState';
// Connect an approved editorial source here when one is supplied.
export default function JournalScreen() {
  return <CollectionPage title="Journal" eyebrow="Burnsville journal"><EmptyState title="No journal stories yet." to="/shop" action="Explore all sauces">Published stories will appear here when available.</EmptyState></CollectionPage>;
}
