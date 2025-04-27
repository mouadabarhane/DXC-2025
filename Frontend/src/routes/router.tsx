import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import paths, { rootPaths } from './path';
import PublishedOfferingsPage from 'pages/PublishedOfferingsPage/PublishedOfferingsPage';
import ArchivedOfferingsPage from 'pages/ArchivedOfferingsPage/ArchivedOfferingsPage';
import CreateProductOfferingsPage from 'pages/CreateProductOfferingsPage/CreateProductOfferingsPage';
import ProductSpecificationsPage from 'pages/ProductSpecificationsPage/ProductSpecificationsPage';

/* ---------------- Lazy loads various components ------------------------- */
const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Dashboard = lazy(() => import('pages/dashboard'));
const AllCustomerOrderPage = lazy(() => import('pages/AllCustomerOrderPage/AllCustomerOrderPage'));
const ListCustomersPage = lazy(() => import('pages/ListCustomersPage/ListCustomersPage'));
const ManageUsersPage = lazy(() => import('pages/ManageUsersPage/ManageUsersPage'));
const NewCustomerOrderPage = lazy(() => import('pages/NewCustomerOrderPage/NewCustomerOrderPage'));
const ProductStorePage = lazy(() => import('pages/ProductStorePage/ProductStorePage'));
const SavedItemsPage = lazy(() => import('pages/SavedItemsPage/SavedItemsPage'));
const ProductOfferingsPage = lazy(() => import('pages/ProductOfferingsPage/ProductOfferingsPage'));
const NotificationsPage = lazy(() => import('pages/NotificationsPage/NotificationsPage'));
const Spinner = lazy(() => import('components/loading/Splash'));
const LoadingProgress = lazy(() => import('components/loading/LoadingProgress'));
const LoginPage = lazy(() => import('pages/authentication/login'));
const SignUpPage = lazy(() => import('pages/authentication/signup'));
const ForgetPasswordPage = lazy(() => import('pages/authentication/forget-password'));
const ResetPasswordPage = lazy(() => import('pages/authentication/reset-password'));

const NotFoundPage = lazy(() => import('pages/not-found'));
const isAuthenticated = localStorage.getItem('token');
/* -------------------------------------------------------------------------- */

/**
 * @Defines the routes for the application using React Router.
 */
export const routes = [
  {
    element: (
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.default,
        element: (
          <MainLayout>
            <Suspense fallback={<LoadingProgress />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: isAuthenticated ? <Dashboard /> : <Navigate to={paths.login} replace />,
          },
          {
            path: paths.AllCustomerOrderPage,
            element: <AllCustomerOrderPage />,
          },
          {
            path: paths.ListCustomersPage,
            element: <ListCustomersPage />,
          },
          {
            path: paths.ManageUsersPage,
            element: <ManageUsersPage />,
          },
          {
            path: paths.NewCustomerOrderPage,
            element: <NewCustomerOrderPage />,
          },
          {
            path: paths.ProductStorePage,
            element: <ProductStorePage />,
          },
          {
            path: paths.NotificationsPage,
            element: <NotificationsPage />,
          },
          {
            path: paths.ProductOfferingsPage,
            element: <ProductOfferingsPage />,
          },
          {
            path: paths.SavedItemsPage,
            element: <SavedItemsPage />,
          },
          {
            path: paths.PublishedOfferingsPage,
            element: <PublishedOfferingsPage />,
          },
          {
            path: paths.ArchivedOfferingsPage,
            element: <ArchivedOfferingsPage />,
          },
          {
            path: paths.CreateProductOfferingsPage,
            element: <CreateProductOfferingsPage />,
          },
          {
            path: paths.ProductSpecificationsPage,
            element: <ProductSpecificationsPage />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: <AuthLayout />,
        children: [
          {
            path: paths.login,
            element: <LoginPage />,
          },
          {
            path: paths.signup,
            element: <SignUpPage />,
          },
          {
            path: paths.forgetPassword,
            element: <ForgetPasswordPage />,
          },
          {
            path: paths.resetPassword,
            element: <ResetPasswordPage />,
          },
        ],
      },
      {
        path: rootPaths.errorRoot,
        children: [
          {
            path: paths.notFound,
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to={paths.notFound} replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: '/DXC-OMT',
});

export default router;
