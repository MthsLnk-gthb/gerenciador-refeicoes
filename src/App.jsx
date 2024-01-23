import "./App.css";
import RoutesApp from "./routes/routes";
import { AuthProvider } from "./Contexts/auth";
import ContainerRefeicao from "./Pages/ContainerRefeicoes";

function App() {
  return (
    <AuthProvider>
      <main className="App">
         <RoutesApp />
      </main>
    </AuthProvider>
  );
}

export default App;

