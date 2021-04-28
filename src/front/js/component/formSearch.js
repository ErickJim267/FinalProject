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

	return (
		// Filtros de busqueda
		<form className="form-search mt-5 py-4">
			<div className="form-row">
				<div className="col-sm-12 col-md-2 mb-3 mb-md-0">
					{/* <label htmlFor="selectLocation">Location</label> */}
					<select className="form-control" id="SelectLocation" name="provincia">
						<option hidden>Seleccionar ubicación</option>
						<option value={1}>San José</option>
						<option value={2}>Alajuela</option>
						<option value={3}>Cartago</option>
						<option value={4}>Heredia</option>
						<option value={5}>Guanacaste</option>
						<option value={6}>Puntarenas</option>
						<option value={7}>Limón</option>
					</select>
				</div>
				<div className="col-sm-12 col-md-2 mb-3 mb-md-0">
					{/* <label htmlFor="selectService">Service Type</label> */}
					<select id="selectService" className="form-control">
						<option hidden>Seleccionar Servicio</option>
						<option>Alojamiento</option>
						<option>Paseo</option>
						<option>Guardería</option>
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
						<option>Perro</option>
						<option>Gato</option>
					</select>
				</div>
				<div className="col-sm-12 col-md-2 mb-3 mb-md-0">
					{/* <label htmlFor="selectService">Service Type</label> */}
					<select id="selectService" className="form-control">
						<option hidden>Tamaño de la mascota (kg)</option>
						<option>1-10</option>
						<option>11-25</option>
						<option>26-45</option>
						<option>+45</option>
					</select>
				</div>
				<div className="col-sm-12 col-md-2 mb-3 mb-md-0">
					<button className="btn btn-info btn-block">Filter</button>
				</div>
			</div>
		</form>
	);
};

export default FormSearch;
