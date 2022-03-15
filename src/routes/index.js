import { Suspense, lazy } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
// layouts
import MainLayout from 'layouts/main'
import DashboardLayout from 'layouts/dashboard'

// guards
// import GuestGuard from '../guards/GuestGuard'
// import AuthGuard from '../guards/AuthGuard'

// components
import LoadingScreen from 'components/LoadingScreen'

// ----------------------------------------------------------------------

const Loadable = Component => props => {
  const { pathname } = useLocation()
  const isDashboard = pathname.includes('/dashboard')

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed',
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            // <GuestGuard>
            //   <Login />
            // </GuestGuard>
            <Login />
          ),
        },
        {
          path: 'register',
          element: (
            // <GuestGuard>
            //   <Register />
            // </GuestGuard>
            <Register />
          ),
        },

        { path: 'forgot-password', element: <ForgotPassword /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    // {
    //   path: 'dashboard',
    //   element: (
    //     // <AuthGuard>
    //     //   <DashboardLayout />
    //     // </AuthGuard>
    //     <DashboardLayout />
    //   ),
    //   children: [
    //     // { path: '/', element: <Navigate to="/dashboard/app" replace /> },
    //     { path: '/', element: <GeneralApp /> },
    //   ],
    // },

    // ERROR PAGE
    // {
    //   path: '*',
    //   element: <LogoOnlyLayout />,
    //   children: [
    //     { path: 'coming-soon', element: <ComingSoon /> },
    //     { path: 'maintenance', element: <Maintenance /> },
    //     { path: 'pricing', element: <Pricing /> },
    //     { path: 'payment', element: <Payment /> },
    //     { path: '500', element: <Page500 /> },
    //     { path: '404', element: <NotFound /> },
    //     { path: '*', element: <Navigate to="/404" replace /> },
    //   ],
    // },

    // Main Routes
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <LandingPage /> }],
    },
    // { path: '*', element: <Navigate to="/404" replace /> },
  ])
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('pages/authentication/Login')))
const Register = Loadable(lazy(() => import('pages/authentication/Register')))
const ResetPassword = Loadable(lazy(() => import('pages/authentication/ResetPassword')))
const ForgotPassword = Loadable(lazy(() => import('pages/authentication/ForgotPassword')))
const VerifyCode = Loadable(lazy(() => import('pages/authentication/VerifyCode')))

// Dashboard
const GeneralApp = Loadable(lazy(() => import('pages/dashboard/GeneralApp')))

// Main
const LandingPage = Loadable(lazy(() => import('pages/LandingPage')))

// ERROR
// const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')))
// const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')))
// const Pricing = Loadable(lazy(() => import('../pages/Pricing')))
// const Payment = Loadable(lazy(() => import('../pages/Payment')))
// const Page500 = Loadable(lazy(() => import('../pages/Page500')))
// const NotFound = Loadable(lazy(() => import('../pages/Page404')))
