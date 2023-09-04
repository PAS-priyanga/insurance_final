import { Link, Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import { useOrderContext } from "../../hooks/useOrdersContext";
import UserInsuranceCatalog from "../Catalog/UserInsuranceCatalog";
import CheckOutPage from "../Checkout/CheckOutPage";

export default function UserHome({ user, setUser }) {  
    const [selector,setSelector] = useState(true);  
    const [catalog, setCatalog]  = useState(false);
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState('')
    const handleShow = () => setShow(true);
    const [showCheckOut, setShowCheckOut] = useState(false);
    const {orders, dispatch} = useOrderContext()
    console.log('ORDER VALUE AT PAGE LOAD:::',orders)
    if(orders === null){
        
        // initialize order
        var order = {
            user_id : user.email,
            total_sum : 0,
            items : []
        }
        dispatch({type: 'INIT_ORDER', payload: order})
        console.log('Order was null so initialized:::',orders)
    }
    
    const handleHouseClicked = () =>{
        setCategory('HOUSE');
        setSelector(false);
        setCatalog(true);        
    }


    
    const handleTravelClicked = () =>{
        setCategory('TRAVEL');
        setSelector(false);
        setCatalog(true);        
    }
    
    const handleVehicleClicked = () =>{
        setCategory('VEHICLE');
        setSelector(false);
        setCatalog(true);        
    }

    const handleShowSelector = () => {
        setCatalog(false);
        setSelector(true);
        setShowCheckOut(false);
    }
    const handleCheckOut = () => {
        setSelector(false);
        setShowCheckOut(true);
        setCatalog(false);
    }
    return (
        <>
        <NavBar user={user} setUser={setUser} />
         
        <div className="selector-home">
        { selector === true &&
            <>
                    <button type="button" onClick={handleHouseClicked}>
                        House Insurance
                    </button>
                
                <br/>
                
                    <button type="button" onClick={handleVehicleClicked}>
                        Vehicle Insurance
                    </button>
                
                <br/>
                
                    <button type="button" onClick={handleTravelClicked}>
                        Travel Insurance
                    </button>
                <br/>
                <div className="checkout-btn">
                    <button onClick={handleCheckOut}>Checkout</button>
                 </div>
            </>
        }
        </div>
        <div className="catalog">
        {   catalog === true &&
        <>
            <button onClick={handleShowSelector}>Back To Selector</button>
            <UserInsuranceCatalog category={category}/>
        </>

        }
        {showCheckOut === true &&
                <>
                <button onClick={handleShowSelector}>Back To Selector</button>
                <CheckOutPage/>
                </>
                
        }       
        </div>
        </>
    );
  }