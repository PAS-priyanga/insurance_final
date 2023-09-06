import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import { Container, Row } from 'react-bootstrap';
import BootstrapNavbar from '../../components/BootstrapNavbar/BootstrapNavBar';
import AuthPage from '../AuthPage/AuthPage';
import AdminHome from '../Admin/AdminHome';
import UserHome from '../User/UserHome';
import { Route, Routes } from 'react-router-dom';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import PolicyTypeSelector from '../Admin/PolicyTypeSelector';
import InsuranceCatalog from '../Catalog/InsuranceCatalog';
import UserInsuranceCatalog from '../Catalog/UserInsuranceCatalog';

export default function App() {
  const [user, setUser] = useState(getUser());
  return ( 
    <>
    <BootstrapNavbar user={user} setUser={setUser}/>
    <Container>
      
      <Row>
    
        {
            (() => {
              console.log('LOGIN HOME AFTER')
                if(user) {
                  console.log(user)
                        if(user.email === 'admin@insurancehub.com'){
                          return (
                                  <>
                                      <AdminHome user ={user} setUser={setUser}></AdminHome>
                                      <Routes>
                                            {/* Route components in here */}                     
                                            <Route path='/catalog' element={<PolicyTypeSelector/>}/>
                                            <Route path='/catalog/vehicle' element={<InsuranceCatalog category={'VEHICLE'}/>}/>
                                            <Route path='/catalog/house' element={<InsuranceCatalog category={'HOUSE'}/>}/>
                                            <Route path='/catalog/travel' element={<InsuranceCatalog category={'TRAVEL'}/>}/>
                                      </Routes>
                                  </>         
                                )
                        }else {
                        return (
                                    <>
                                      <UserHome user={user} setUser={setUser}/>
                                      <Routes>
                                            {/* Route components in here */}
                                            <Route path="/orders" exact element={<OrderHistoryPage />} />
                                            <Route path='/catalog' exact element={<PolicyTypeSelector/>}/>
                                      </Routes>
                                    
                                    </>
                                )
                              }
                    }  else {
                        return (
                          <AuthPage setUser={setUser} />
                        )
                    }
            })()  
        }  
    
    </Row>
    </Container>
    </>
);
}
