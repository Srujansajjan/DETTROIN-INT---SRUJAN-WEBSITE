import { useRoutes } from 'react-router-dom';
import routes from '@/routes';
import Layout from '@components/layout/Layout';

function App() {
  const routeElements = useRoutes(routes);

  return <Layout>{routeElements}</Layout>;
}

export default App;
