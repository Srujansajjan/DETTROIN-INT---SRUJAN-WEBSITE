import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import Academics from '@pages/Academics/Academics';
import Admissions from '@pages/Admissions/Admissions';
import Gallery from '@pages/Gallery/Gallery';
import Contact from '@pages/Contact/Contact';
import NotFound from '@pages/NotFound/NotFound';

/**
 * Application route configuration.
 * Each route maps a URL path to a page component.
 * Add nested routes by using the `children` property.
 */
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/academics',
    element: <Academics />,
  },
  {
    path: '/admissions',
    element: <Admissions />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
