import React from "react";
import CardNotification from "../component/cardNotification";
import { Context } from "../store/appContext";

const Notifications = () => {
	const { store, actions } = React.useContext(Context);
	console.log(store.userAuth);
	return (
		<div>
			{store.userAuth && (
				<>
					<h3 className="mt-5">
						Bienvenido: {store.userAuth.name.toUpperCase()} {store.userAuth.last_name.toUpperCase()}
					</h3>
					<br />
					<CardNotification />
				</>
			)}
		</div>
	);
};

export default Notifications;
