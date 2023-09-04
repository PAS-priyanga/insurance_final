import { Link, Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import AddPolicyForm from "../../components/AddPolicyForm/AddPolicyForm";
import InsuranceCatalog from "../Catalog/InsuranceCatalog";

export default function AdminHome({ user, setUser }) {  
    const [showMenu ,setShowMenu] = useState(true);
    const [showManage,setShowManage] = useState(false);
    const [showHouseCatalog,setShowHouseCatalog] = useState(false);
    const [showVehicleCatalog,setShowVehicleCatalog] = useState(false);
    const [showTravelCatalog,setShowTravelCatalog] = useState(false);
    const [backToCatalogToggle, setBackToCatalogToggle] = useState(false);
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleManageClicked = () =>{
        setShowManage(true);
        setShowMenu(false);
    }
    const handleHouseCatalogClicked = () =>{
        setShowMenu(false);
        setShowManage(false);
        setShowHouseCatalog(true);
        setBackToCatalogToggle(true);
    }
    const handleTravelCatalogClicked = () =>{
        setShowMenu(false);
        setShowManage(false);
        setShowTravelCatalog(true);
        setBackToCatalogToggle(true);
    }
    const handleVehicleCatalogClicked = () =>{
        setShowMenu(false);
        setShowManage(false);
        setShowVehicleCatalog(true);
        setBackToCatalogToggle(true);
    }
    const handleBackToCatalogMenu = () =>{
        setShowMenu(false);
        setShowHouseCatalog(false);
        setShowVehicleCatalog(false);
        setShowTravelCatalog(false);
        setBackToCatalogToggle(false);
        setShowManage(true);
       
    }

    const handleAdminHomeClicked     = () => {
        setShowMenu(true);
        setShowManage(false);
        setShowHouseCatalog(false);
        setShowVehicleCatalog(false);
        setShowTravelCatalog(false);
        setBackToCatalogToggle(false);
    }

    return (
        <>
        <NavBar user={user} setUser={setUser} />
        <h2>Welcome Admin!</h2> 
        
        {
            showMenu === true &&
            <div>
                <button type="button" onClick={handleManageClicked}>
                    Manage Insurance Catalog
                </button>
                
                <button type="button" onClick={handleShow}>
                    Add Insurance
                </button>
            </div>
        }
        <div>
            {showManage === true && 
            <> 
                <button type="button" onClick={handleAdminHomeClicked}>
                    Admin Home
               </button>
               <br/>
                <button type="button" onClick={handleHouseCatalogClicked}>
                    Manage House Insurance Catalog
                </button>
            
            
            <br/>
            
                <button type="button" onClick={handleVehicleCatalogClicked}>
                    Manage Vehicle Insurance Catalog
                </button>
            
            <br/>

                <button type="button" onClick={handleTravelCatalogClicked}>
                    Manage Travel Insurance Catalog
                </button>

            </>
            }
        </div>
        <div>
            { backToCatalogToggle === true  && 
            <button onClick={handleBackToCatalogMenu}>Back To Menu</button>

            }
            { showHouseCatalog === true && 
                    <InsuranceCatalog category={'HOUSE'}/>
            }
            { showTravelCatalog === true && 
                <InsuranceCatalog category={'TRAVEL'}/>
            }
            { showVehicleCatalog === true &&
                    <InsuranceCatalog category={'VEHICLE'}/>
            }
        </div>
            <div>
                {show === true && 
                <AddPolicyForm show={show} setShow={setShow}></AddPolicyForm>
                }
            </div>     
        </>
    );
  }