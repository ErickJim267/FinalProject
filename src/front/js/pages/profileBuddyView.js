import React from "react";
import CardServices from "../component/cardServices";
import DataSheetBuddy from "../component/dataSheetBuddy";
import "../../styles/profileBuddyView.scss";
import MainInfoBuddy from "../component/mainInfoBuddy";

const ProfileBuddyView = () => {
	return (
		<div className="container mt-5">
			<DataSheetBuddy />
			<div className="row mt-4 text-gray">
				<div className="col-md-4 p-4">
					<CardServices />
					<div className="container-preferences my-5">
						<h4 className="font-weight-bold">Tamaños aceptados</h4>
						<div className="d-flex justify-content-around my-3">
							<div className="item-size">
								<i className />
								<span className>
									1-10
									<small className="d-block text-center">kg</small>
								</span>
							</div>
							<div className="item-size ">
								<i className />
								<span className>
									11-25
									<small className="d-block text-center">kg</small>
								</span>
							</div>
							<div className="item-size">
								<i className />
								<span className>
									26-45
									<small className="d-block text-center">kg</small>
								</span>
							</div>
							<div className="item-size">
								<i className />
								<span className>
									+45
									<small className="d-block text-center">kg</small>
								</span>
							</div>
						</div>
					</div>
					<div className="container-skills my-5">
						<h4 className="font-weight-bold">Habilidades extras</h4>
						<ul className="pl-4 my-3">
							<li>Administración de medicamentos inyectables</li>
							<li>Administración de medicamentos orales</li>
							<li>Experiencia con perros de necesidades especiales</li>
							<li>Experiencia en entrenamiento</li>
							<li>+5 años de experiencia</li>
							<li>Hablo ingles</li>
						</ul>
					</div>
				</div>
				<div className="col-md-8 py-4">
					<MainInfoBuddy />
				</div>
			</div>
		</div>
	);
};

export default ProfileBuddyView;