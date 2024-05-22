import Layout from './components/layout';
import { HomeScreen } from './pages/home.screen';
import { BillsScreen } from './pages/bills.screen';
import { GraphicsScreen } from './pages/graphics.screen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
        <Route
          path="/bills"
          element={
            <Layout>
              <BillsScreen />
            </Layout>
          }
        />
        <Route
          path="/graphics"
          element={
            <Layout>
              <GraphicsScreen />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
