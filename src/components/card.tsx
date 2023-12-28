import { GetApp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { TooltipComponent } from './tooltip';

interface CardProps {
  title: string;
  imageSrc: string;
  onDownloadClick?: () => void;
}

const CardComponent: React.FC<CardProps> = ({ title, imageSrc, onDownloadClick }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center', padding: '16px' }}>
      <img src={imageSrc} alt={title} style={{ width: '50%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
        <h3 style={{ color: "#877f7f"}}>{title}</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          {onDownloadClick && (
            <TooltipComponent tooltipTitle="Baixar">
                <IconButton onClick={onDownloadClick} style={{ color: "#877f7f"}}>
                    <GetApp />
                </IconButton>
            </TooltipComponent>
          )}
        </div>
      </div>
    </div>
  );
};

export { CardComponent };

