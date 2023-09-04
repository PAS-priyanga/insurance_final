
const DetailOrderListItem = ({ orderPolicy }) => {
    
    return (   
    <>
        <div className="policy-details">
                <h4>{orderPolicy.name}</h4>
                <p><strong>Price ($): </strong>{orderPolicy.price}</p>
                <p><strong>Term: </strong>{orderPolicy.term}</p>
                <p><strong>Type: </strong>{orderPolicy.type}</p>
                
        </div>
    </>       
    )
}

export default DetailOrderListItem;