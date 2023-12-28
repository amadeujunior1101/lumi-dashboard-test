import Typography from '@mui/material/Typography';
import React from 'react';

interface MyTypographyProps {
    title: string;
    margin?: string;
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'subtitle1' | 'subtitle2';
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 'initial' | 'inherit';
}

const TypographyComponent: React.FC<MyTypographyProps> = ({
    title,
    margin = '30px auto 30px auto',
    textTransform = 'none',
    variant = 'h4',
    fontWeight = 'normal',
}) => {
  return (
    <Typography style={{ margin }} variant={variant} fontWeight={fontWeight} sx={{ textTransform }}>
      {title}
    </Typography>
  );
};

export { TypographyComponent };
