import React from "react";

const FormSearch = () => {
	return (
		// Filtros de busqueda
		// <aside className="sidebar-search">
		<form className="form-search">
			<div className="row">
				<div className="col-3">
					{/* <label htmlFor="selectLocation">Location</label> */}
					<select className="form-control" id="SelectLocation" name="provincia">
						<option>Select to location</option>
						<option value={1}>San José</option>
						<option value={2}>Alajuela</option>
						<option value={3}>Cartago</option>
						<option value={4}>Heredia</option>
						<option value={5}>Guanacaste</option>
						<option value={6}>Puntarenas</option>
						<option value={7}>Limón</option>
					</select>
				</div>
				<div className="col-2">
					{/* <label htmlFor="selectService">Service Type</label> */}
					<select id="selectService" className="form-control">
						<option>Service Type</option>
						<option>Alojamiento</option>
						<option>Paseo</option>
						<option>Guardería</option>
					</select>
				</div>
				<div className="col-4">
					<div className="btn-group btn-group-toggle" data-toggle="buttons">
						<label className="btn btn-outline-info">
							<input type="checkbox" value="dog" /> Dog
						</label>
						<label className="btn btn-outline-info">
							<input type="checkbox" value="cat" /> Cat
						</label>
					</div>
				</div>
			</div>
		</form>
		// </aside>
	);
};

export default FormSearch;
