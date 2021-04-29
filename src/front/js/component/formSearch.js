import React, { useState } from "react";
// import DatePicker from "react-bootstrap-date-picker"; ELIMINAR
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormSearch = () => {
	const [startDate, setStartDate] = useState(null);
	// const [endDate, setEndDate] = useState(null);
	// const onChange = dates => {
	// 	const [start, end] = dates;
	// 	setStartDate(start);
	// 	setEndDate(end);
	// };
	const [provincia, setProvincia] = useState("");
	console.log(provincia);
	return (
		// Filtros de busqueda
		<form className="form-search mt-5 py-4">
			<div className="form-row">
				<div className="col-sm-12 col-md-2 mb-3 mb-md-0">
					{/* <label htmlFor="selectLocation">Location</label> */}
					<select
						value={provincia}
						onChange={e => setProvincia(e.target.value)}
						className="form-control"
						id="SelectLocation"
						name="provincia">
						<option hidden>Seleccionar ubicación</option>
						<option value="San José">San José</option>
						<option value="Alajuela">Alajuela</option>
						<option value="Cartago">Cartago</option>
						<option value="Heredia">Heredia</option>
						<option value="Guanacaste">Guanacaste</option>
						<option value="Puntarenas">Puntarenas</option>
						<option value="Limón">Limón</option>
					</select>
				</div>
				<div className="col-sm-12 col-md-2 mb-3 mb-md-0">
					{/* <label htmlFor="selectService">Service Type</label> */}
					<select id="selectService" className="form-control">
						<option hidden>Seleccionar Servicio</option>
						<option value="Alojamiento">Alojamiento</option>
						<option value="Paseo">Paseo</option>
						<option value="Guardería">Guardería</option>
					</select>
				</div>
				<div className="col-sm-12 col-md-2 mb-3 mb-md-0">
					<DatePicker
						selected={startDate}
						onChange={date => setStartDate(date)}
						dateFormat="dd/MM/yyyy"
						className="form-control"
						placeholderText="Choose start date"
					/>
				</div>
				<div className="col-sm-12 col-md-2 mb-3 mb-md-0">
					<select id="selectService" className="form-control">
						<option hidden>Tipo de Mascota</option>
						<option value="Perro">Perro</option>
						<option value="Gato">Gato</option>
					</select>
				</div>
				<div className="col-sm-12 col-md-2 mb-3 mb-md-0">
					{/* <label htmlFor="selectService">Service Type</label> */}
					<select id="selectService" className="form-control">
						<option hidden>Tamaño de la mascota (kg)</option>
						<option value="1-10">1-10</option>
						<option value="11-25">11-25</option>
						<option value="26-45">26-45</option>
						<option value="+45">+45</option>
					</select>
				</div>
				<div className="col-sm-12 col-md-2 mb-3 mb-md-0">
					<button className="btn btn-info btn-block" value="Filter">
						Filter
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormSearch;
