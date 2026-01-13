import React from 'react';

// Fix: Added React import to define the React namespace for React.ReactNode type
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  beforeUrl?: string;
  afterUrl?: string;
}

export interface InquiryFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}
