import'.//App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Acceuil from'./pages/Acceuil';

 import Erreur from './pages/Erreur';
 import Formation from './pages/Formation';

import Contact from './pages/Contact';
import Apropos from './pages/Apropos';





function App() {
return (
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Acceuil/>}/>

 <Route path='*' element={<Erreur/>}/>
 <Route path='/Formation' element={<Formation/>}/>

<Route path='/Contact' element={<Contact/>}/>
<Route path='/Apropos' element={<Apropos/>}/>





 </Routes>
 </BrowserRouter> 


);
}
export default App;


