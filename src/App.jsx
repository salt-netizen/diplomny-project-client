import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';

import HomePage from './pages/HomePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import PropertyPage from './pages/PropertyPage.jsx';
import TourPage from './pages/TourPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import ResetPasswordPage from './pages/ResetPasswordPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
        <Route path="/tour/:id" element={<TourPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/booking/:type/:id" element={<BookingPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
