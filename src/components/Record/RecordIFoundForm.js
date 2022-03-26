import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewRecord } from '../../modules/RecordManager';
import { getAllShops } from '../../modules/ShopManager';

// import './RecordForm.css'

export const RecordIFoundForm = () => {
	

	const [record, setRecord] = useState({
	userId: 0,
    title: "",
	artist: "",
    genre: "",
    shopId: 0,
    HaveRecord: false,
    date: "",
    img: ""
	});

	const [isLoading, setIsLoading] = useState(false);

    const [shops, setShops] = useState([]);


	const navigate = useNavigate();


	const handleControlledInputChange = (event) => {
	
		const newRecord = { ...record }
		let selectedVal = event.target.value
		
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		
		newRecord[event.target.id] = selectedVal
		
		setRecord(newRecord)
	};

    useEffect(() => {
        getAllShops().then(setShops)
    }, []);

	const handleClickSaveRecord = (event) => {
    event.preventDefault()


    const user = JSON.parse(sessionStorage.getItem("discdiary_user"))

    const newRecord = { ...record }
        newRecord.userId = user.id
		newRecord.dateTime = new Date().toLocaleString();

		if (event.target.id ==="HaveRecord") {
			newRecord.HaveRecord = true 
		}
        

		addNewRecord(newRecord)
		.then(() => {
			if (newRecord.HaveRecord === false ) {
			navigate("/records/HaveRecord")
	
			}
		})

			

    	}
	


	return (
		<form className="recordForm">
			<h2 className="recordForm__title">I Found It! </h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="title">Title:</label>
					<input type="text" id="title" value={record.title} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="artist">Artist:</label>
					<input type="text" id="artist" value={record.artist} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="genre">Genre:</label>
					<input type="text" id="genre" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter genre" value={record.genre} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="location"> Purchased at </label>
					<select value={record.shopId} name="shopId" id="shopId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a record shop</option>
						{shops.map(l => (
							<option key={l.id} value={l.id}>
								{l.name} {l.city}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="date">Purchase Date:</label>
					<input type="text" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter date here" value={record.date} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="shop">Notes:</label>
					<input type="textarea" id="notes" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter notes here" value={record.notes} />
				</div>
			</fieldset>
			<button className="btn btn-primary" id="HaveRecord"
				onClick={handleClickSaveRecord}>
				Add to Collection
          </button>
		</form>
	)
};