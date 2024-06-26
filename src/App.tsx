import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ThemeProvider from "./theme";
import Layout from "./layout/Layout";


// const Home = lazy(() => import("./pages/Home"));


// function SuspenseWrapper({ children }) {
//   return (
//     <Suspense
//       fallback={
//         <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//           <LoadingAnimation type="line-scale" color="#FF4D00" active />
//         </div>
//       }
//     >
//       {children}
//     </Suspense>
//   );
// }


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
        <Route  element={<Layout />} >

          <Route path="/" element={<Home />} />
          
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
