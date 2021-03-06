import './App.css';
import AppHeader from "../Header/AppHeader";
import AppFooter from "../Footer/AppFooter"
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../_business/Home/HomePage'));
const LesAccessoires = lazy(() => import('../../_business/LesAccessoires/LesAccessoires'));
const LesBas = lazy(() => import('../../_business/LesBas/LesBas'));
const LesHauts = lazy(() => import('../../_business/LesHauts/LesHauts'));
const LesNouveautes = lazy(() => import('../../_business/LesNouveautes/LesNouveautes'));
const LesRobes = lazy(() => import('../../_business/LesRobes/LesRobes'));
const Tout = lazy(() => import('../../_business/Tout/Tout'));
const Panier = lazy(() => import('../../_business/Panier/Panier'));
const Produit = lazy(() => import('../../_business/Produit/Produit'));
const FinalisationPaiement = lazy(() => import('../../_business/FinalisationPaiement/FinalisationPaiement'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Chargement...</div>}>
      <AppHeader />
      <Routes>
        <Route path="/catalogue/bas" element={<LesBas />} />
        <Route path="/catalogue/hauts" element={<LesHauts />} />
        <Route path="/nouveautes" element={<LesNouveautes />} />
        <Route path="/catalogue/robes" element={<LesRobes />} />
        <Route path="/tout" element={<Tout />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/catalogue/accessoires" element={<LesAccessoires />} />
        <Route path="/produit/:id" element={<Produit />} />
        <Route path="/confirmation" element={<FinalisationPaiement />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
    <AppFooter />
  </Router>
);
export default App;

