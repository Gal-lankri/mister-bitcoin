import './assets/scss/global.scss';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { StatisticPage } from './pages/StatisticPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage';
import { SignupPage } from './pages/SignupPage';

function App() {

  return (
    <Router>
      <div className="main-app">
        <header className='app-header flex justify-center align-center space-between'>
          <h1>Mister Bitcoin</h1>
          <nav className='flex gap justify-center align-center'>
            <NavLink to={'/'}>Home</NavLink>|
            <NavLink to={'/contact'}>Contacts</NavLink>|
            <NavLink to={'/statistic'}>Statistics</NavLink>
          </nav>
        </header>
        <Switch className="app-body">
          <Route path="/signup" component={SignupPage}/>
          <Route path="/contact/edit/:id?" component={ContactEditPage}/>
          <Route path="/contact/:id" component={ContactDetailsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/statistic" component={StatisticPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
