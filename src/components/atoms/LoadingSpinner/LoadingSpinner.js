import React from 'react';

import './loading.css';

const LoadingSpinner = () => {
  return (
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
