import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addShop } from '../../modules/ShopManager';
import { getAllShops } from '../../modules/ShopManager';
// import './RecordForm.css'

export const ShopForm = () => {
	

	const [shop, setShop] = useState({
	
    id: 0,
    userId: 0,
    name: "",
	city: "",
    img: "",
    notes: ""
	});

	const [isLoading, setIsLoading] = useState(false);

    const [shops, setShops] = useState([]);


	const navigate = useNavigate();


	const handleControlledInputChange = (event) => {
	
		const newShop = { ...shop }
		let selectedVal = event.target.value
		
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		
		newShop[event.target.id] = selectedVal
		
		setShop(newShop)
	};

    useEffect(() => {
        getAllShops().then(setShops)
    }, []);

	const handleClickSaveShop = (event) => {
    event.preventDefault()

    const shopId = shop.id

    const user = JSON.parse(sessionStorage.getItem("discdiary_user"))

    const newShop = { ...shop }
    newShop.userId = user.id
		addShop(newShop)
		.then(() => navigate("/shops"))

    }


	return (
		<form className="shopForm">
			<h2 className="shopForm__title">Add a Shop </h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Shop Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter shop name here" value={shop.name} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="city">City:</label>
					<input type="text" id="city" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter shop location here" value={shop.city} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="shop">Notes:</label>
					<input type="textarea" id="notes" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter notes here" value={shop.notes} />
				</div>
			</fieldset>
			<button className="btn btn-HaveVisited"
				onClick={handleClickSaveShop}>
				I've Been Here!
          </button>
          <button className="btn btn-ToVisit"
				onClick={handleClickSaveShop}>
				I Want to Go Here!
          </button>
		</form>
	)
};
