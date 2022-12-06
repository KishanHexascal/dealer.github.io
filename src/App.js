import './App.css';
import {Routes,Route, BrowserRouter } from "react-router-dom";
import ResetPass from './Pages/Reset';
import Signup from './Pages/Signup';
import Dashbord from './Pages/Dashbord';
import Photos from './Pages/Photos';
import DetectPhotos from './Pages/DetectPhoto';

function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <ResetPass /> */}
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<Signup />}/>
             <Route path='/reset-password' element={<ResetPass /> }/>
             <Route path='/dashbord' element={<Dashbord /> }/>
             <Route path='/photos' element={<Photos /> }/>
             <Route path='/detect-photos' element={<DetectPhotos /> }/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
