import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Newsletter: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const formContainer = document.getElementById('ml-form');
    

    if (formContainer instanceof HTMLElement) {
      // Clear the container before re-adding the form
      formContainer.innerHTML = '';
    }

    const script = document.createElement('script');
    // Append a timestamp to force the browser to fetch a new copy
    script.src = `/mailerlite.js?t=${Date.now()}`;
    script.async = true;

    // Ensure the form renders after the script loads
    script.onload = () => {
      console.log('MailerLite script loaded and should initialize the form.');
      // If form initialization depends on DOM, double-check if additional setup is needed here.
    };

    script.onerror = () => {
      console.error('Failed to load MailerLite script');
    };

    document.body.appendChild(script);

    return () => {
      // Clean up script and form on component unmount or when navigating away
      script.remove();
      if (formContainer instanceof HTMLElement) {
        formContainer.innerHTML = ''; // Ensure cleanup to avoid duplicate forms
      }
    };


  }, [location]);

  return (
    <>
      {/* Make sure this ID matches what the script expects to target */}
      <div id="ml-form" className="ml-embedded" data-form="CREkN5"></div>
    </>
  );
};

export default Newsletter;
