import { Link } from "react-router-dom";


export default function PolicyTypeSelector() {  
    return (
        <>
        <div> 
        <Link to="/catalog/house">
            <button type="button">
                  Manage House Insurance Catalog
            </button>
        </Link>
        </div>
        <br/>
        <Link to="/catalog/vehicle">
            <button type="button">
                  Manage Vehicle Insurance Catalog
            </button>
        </Link>
        <br/>
        <Link to="/catalog/travel">
            <button type="button">
                  Manage Travel Insurance Catalog
            </button>
        </Link>
             
        </>
    );
  }