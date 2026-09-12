import React from 'react';
import CollectionPage from '../components/CollectionPage';
import EmptyState from '../components/EmptyState';
export default function NotFoundScreen() {
  return <CollectionPage title="Page not found" eyebrow="404"><EmptyState title="This page is not available." to="/shop" action="Explore all sauces">Check the address or return to the shop.</EmptyState></CollectionPage>;
}
