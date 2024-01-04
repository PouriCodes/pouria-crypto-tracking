import FooterComponent from './components/ui/Footer.components';
import NavbarComponent from './components/ui/Navbar.component';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="wrapper">
        <h2>wrapper</h2>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
