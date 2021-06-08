import './App.scss';
import { SignInProvider } from "./context/clientcontext"
import { SignUpProvider } from "./context/clientcontext"
// Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Footer from "./components/Footer"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
function App() {
  return (
    <div className="App">
      <SignInProvider>
        <SignUpProvider>
          <Header />
          <Hero />
          <Products />
          <Footer />
          <SignIn />
          <SignUp />
        </SignUpProvider>
      </SignInProvider>
    </div>
  );
}

export default App;
