import {Suspense, lazy} from 'react';
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";

//pages
const Index = lazy(() => import("./pages"));

function App() {
  return (
    <div className="px-5 md:px-10 pt-2 ">
      <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route index element={<Index />}/>
            </Routes>
        </Suspense>
    </div>
  )
  }

export default App


// px-5 phones screens/////sm:pc screen