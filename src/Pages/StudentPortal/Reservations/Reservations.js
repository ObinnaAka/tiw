import { API } from "aws-amplify";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "../..";
import { Scheduling } from "../../";
import { MyReservation } from "../../../components";
import Modal from "../../../components/Modal/Modal";
import { UserContext } from "../../../context/user-context";
import { listReservations, listTools } from "../../../graphql-optimized/queries";

const rules = [
	"You must wear a mask at all times inside the space",
	"You must make a reservation to enter the space",
	"No guests allowed during your reservation",
	"Do not leave any materials behind",
];

const Reservation = () => {
	const [accepted, setAccepted] = useState(false);
	const [myReservations, setMyReservations] = useState({});
	const [myReservationLocations, setMyReservationLocations] = useState({});
	const [currTime, setCurrTime] = useState(0);

	const [conflictingErr, setConflictingErr] = useState(false);
	const user = useContext(UserContext);

	const confirmErrModal = () => {
		setConflictingErr(false);
		// setReservations([]);
	};

	return (
		<div>
			<div>
				{!accepted && (
					<Modal canConfirm onConfirm={() => setAccepted(true)} confirmText="Accept">
						<h1>Workstation Reservation Terms and Conditions:</h1>
						<ol>
							{rules.map((rule) => (
								<li key={rule}>{rule}</li>
							))}
						</ol>
						<h3>A student technician will clean each workspace before and after your time slot</h3>
					</Modal>
				)}
			</div>
			{/* {Object.keys(myReservations).length ? (
				<div style={{ height: "250px" }}>
					<h3>My Reservations</h3>
					{Object.entries(myReservations).map(([group, times]) => (
						
						
					))}
				</div>
			) : (
				
				<div>
					<h4>No Reservations on your account</h4>
					<h5>Please note that in order to check into the space, you must have a reservation</h5>
				</div>
			)} */}
			<React.Fragment>
				<h3>Make A Reservation</h3>
				<Scheduling />
			</React.Fragment>
			{conflictingErr && (
				<Modal canConfirm onConfirm={confirmErrModal} confirmText="Okay!">
					<h3>
						This reservation conflicts with another reservation you have! Please select a
						non-conflicting reservation!
					</h3>
				</Modal>
			)}
		</div>
	);
};

export default Reservation;
