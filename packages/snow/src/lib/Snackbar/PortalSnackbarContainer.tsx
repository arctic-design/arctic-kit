'use client';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SnackbarContainer } from './SnackbarContainer'; // Adjust the import path as necessary

const PortalSnackbarContainer: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true once the component mounts
    setIsClient(true);
  }, []);

  // Conditionally render the portal content only on the client side
  return isClient ? createPortal(<SnackbarContainer />, document.body) : null;
};

export { PortalSnackbarContainer };
