import useMediaQuery from '@mui/material/useMediaQuery';
import React, { ReactNode } from 'react';
import { useLoading } from '../loading.context';
import { LoadingComponent } from './loading';
import { Sidebar } from './sidebar';
import TopBar from './topBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Ajuste conforme necessário
  const { loading } = useLoading();

  return (
    <>
    {
      loading && 
      <div>
        <LoadingComponent />
      </div>
    }
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'  }}>
      <TopBar />
      <div style={{ display: 'flex', flexGrow: 1, marginTop: isMobile ? '0' : '64px', width: '100vw'  }}>
        {isMobile ? (
          <>
            <Sidebar />
            <div style={{ marginTop: '20px', padding: '20px', flexGrow: 1 }}>
              {children}
            </div>
          </>
        ) : (
          <>
            <Sidebar />
            <div style={{ marginLeft: '100px', flexGrow: 1 }}>
              {children}
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default Layout;
