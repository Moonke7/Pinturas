import Header from "./Components/Header";
import './styles/App.css';

export function MainLayout({ children}) {

  return (
    <div className="main-layout">
      <Header/>
      {children}
    </div>
  );
}
