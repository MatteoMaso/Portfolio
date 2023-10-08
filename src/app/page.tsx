import React from 'react';
import Home from '../components/home';
import Header from '@/components/header';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matteo Maso',
  description: 'Matteo Maso\'s personal website',
}

export default function HomePage() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};
