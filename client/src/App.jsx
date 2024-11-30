
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import User from './Page/User/Sidebar';
import Admin from './Page/Admin/Admin';
import Home from './Page/User/Home/Home';
import Setting from './Page/User/Setting/Setting';
import Layout from './Page/Layout/Layout';
import ResetPassword from './Page/Layout/ResetPassword';
function App() {


  return (
    <>
<Router>
<Routes>
  <Route element={<Layout/>} >

  <Route path='/admin'element={<Admin/>} />
  <Route path='/' element={<Home/>} />
  <Route path="/setting" element={<Setting />} />
  <Route path="/user" element={<Admin />} />
  <Route  path='/reset-password' element={<ResetPassword/>} />
  </Route>
</Routes>
</Router>
      
    </>
  )
}

export default App
