import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

const LoadingComponent: React.FC = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", 
        width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center", display: "flex", 
        zIndex: 9999 }}>
      <CircularProgress style={{ color: 'white' }} />
      <div style={{ color: 'white', marginTop: '16px', marginLeft: '10px' }}>Carregando...</div>
    </div>
  );
};

export { LoadingComponent };
