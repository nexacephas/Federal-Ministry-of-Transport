import { Route, Routes } from 'react-router-dom';

import IntroExperience from './components/IntroExperience/IntroExperience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Leadership from './components/Leadership/Leadership';
import LeadershipHierarchy from './components/LeadershipHierarchy/LeadershipHierarchy';
import FCSSIP from './components/FCSSIP/FCSSIP';
import DepartmentsGrid from './components/DepartmentsGrid/DepartmentsGrid';
import NewsEvents from './components/NewsEvents/NewsEvents';
import OnlineServices from './components/OnlineServices/OnlineServices';
import StatsCounters from './components/StatsCounters/StatsCounters';
import AgenciesShowcase from './components/AgenciesShowcase/AgenciesShowcase';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function HomePage() {
  return (
    <>
      <IntroExperience />
      <Header />
      <Hero />
      <Leadership />
      <FCSSIP />
      <DepartmentsGrid />
      <NewsEvents />
      <OnlineServices />
      <StatsCounters />
      <AgenciesShowcase />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

function LeadershipHierarchyPage() {
  return (
    <>
      <Header />
      <LeadershipHierarchy />
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/leadership-hierarchy"
        element={<LeadershipHierarchyPage />}
      />
    </Routes>
  );
}

export default App;