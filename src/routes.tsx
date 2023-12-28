import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { BillsScreen } from './screens/bills.screen';
import { GraphicsScreen } from './screens/graphics.screen';
import { HomeScreen } from './screens/home.screen';

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
