import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";
import "../../styles/contact.css";
// import contactCard from "../component/ContactCard";

export const Home = () => {
	// const { store, actions } = useContext(Context);

	// return (
	// 	<div className="container-container">
	// 		{store.contacts.map((contact, index) => {
	// 			return(
	// 				<div key={contact.id + index} className="contact-container m-2">
	// 					<div className="contact-image-container">
	// 						<Link to="/user" className="covertLinks" state={{fullName: contact.name, }}></Link>
	// 					</div>
	// 				</div>
	// 			);
	// 		})}
	// 	</div>
	// );

	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>

};
