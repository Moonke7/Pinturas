import Header from "./Components/Header";


export function MainLayout({ children}) {

  return (
    <div>
      <Header/>
      <div>{children}</div>
    </div>
  );
}
