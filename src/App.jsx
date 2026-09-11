import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Leadership from './components/Leadership/Leadership';
import DepartmentsGrid from './components/DepartmentsGrid/DepartmentsGrid';
import NewsEvents from './components/NewsEvents/NewsEvents';
import OnlineServices from './components/OnlineServices/OnlineServices';
import StatsCounters from './components/StatsCounters/StatsCounters';
import AgenciesShowcase from './components/AgenciesShowcase/AgenciesShowcase';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Leadership />
      <DepartmentsGrid />
      <NewsEvents />
      <OnlineServices />
      <StatsCounters />
      <AgenciesShowcase />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;