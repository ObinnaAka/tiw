import React, { useState, useContext } from "react";
import { useInput } from "../../../helpers/useInputChange";
import AuthContext from "../../../context/auth-context";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "./Maintenance.css";

// Warninig....This page is a mess

const MaintenancePage = () => {
	const { value: name, bind: bindName, reset: resetName } = useInput("");
	const {
		value: location,
		bind: bindLocation,
		reset: resetLocation,
	} = useInput("");
	const {
		value: toolType,
		bind: bindToolType,
		reset: resetToolType,
	} = useInput("");
	const { value: comment, bind: bindComment, reset: resetComment } = useInput(
		""
	);

	const [transactionType, setTransactionType] = useState("Tool Checkout");
	const [member, setMember] = useState("5ee97ef91aa37a2944f9134a");
	const [inService, setInService] = useState(true);
	const [tools, setTools] = useState([]);

	//__ Context__
	const context = useContext(AuthContext);

	//__ State Handlers__
	const transactionTypeChangeHandler = (event) => {
		setTransactionType(event.target.value);
	};
	const memberChangeHandler = (event) => {
		setMember(event.target.value);
	};
	const toolHandler = (newTool) => {
		setTools(newTool);
		console.log(newTool);
	};
	const inServiceHandler = () => {
		setInService(!inService);
	};

	//__ Submission Handlers__
	const submitToolHandler = (evt) => {
		evt.preventDefault();
		if (toolType.trim().length === 0 || name.trim().length === 0) {
			alert("Invalid information entered");
			return;
		}
		const requestBody = {
			query: `
            mutation {
                createTool(toolInput: { name: "${name}", location: "${location}", toolType: "${toolType}", inService: ${inService}, }) {
                  _id
                  toolType
                }
              }
              
			`,
		};
		console.log(context.token);
		let headers = { "Content-Type": "application/json" };
		if (context.token) {
			headers["Authorization"] = `Token ${context.token}`;
		}
		fetch("http://localhost:8000/graphql", {
			method: "POST",
			body: JSON.stringify(requestBody),
			headers,
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error("Failed");
				}
				return res.json();
			})
			.catch((err) => {
				console.log(err);
			});
		resetName();
		resetLocation();
		resetToolType();
	};
	const submitTransactionHandler = (evt) => {
		evt.preventDefault();
		console.log(JSON.stringify(tools));
		const requestBody = {
			query: `
            mutation {
                createTransaction(transactionInput: { transactionType: "${transactionType}", member: "${member}", staffMember: "${
				context.memberID
			}", comment: "${comment}", tools: ${JSON.stringify(tools)}}) {
                  _id
                  transactionType
                }
              }
              
			`,
		};
		let headers = { "Content-Type": "application/json" };
		if (context.token) {
			headers["Authorization"] = `Token ${context.token}`;
		}
		fetch("http://localhost:8000/graphql", {
			method: "POST",
			body: JSON.stringify(requestBody),
			headers,
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error("Failed");
				}
				return res.json();
			})
			.catch((err) => {
				console.log(err);
			});
		// resetToolType()
		// resetInService()
	};

	return (
		<div className="left-view">
			<form className="create-tool" onSubmit={submitToolHandler}>
				<div className="form-control">
					<label htmlFor="name">
						Name:
						<input type="string" value={name} {...bindName} />
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="toolType">
						Type of Tool:
						<input type="string" value={toolType} {...bindToolType} />
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="location">
						Location:
						<input type="Location" value={location} {...bindLocation} />
					</label>
				</div>
				<div className="form-control" id="checkbox">
					<label htmlFor="inService">
						In Service:
						<ToggleButton
							className="itemButton"
							type="checkbox"
							onChange={inServiceHandler}
							checked={inService}
						/>
					</label>
				</div>
				<div className="form-actions">
					<input type="submit" className="button" value="Create New Tool" />
				</div>
			</form>

			<form className="create-transaction" onSubmit={submitTransactionHandler}>
				<div className="form-control">
					<label className="selector-label" htmlFor="member">
						Member:
						<select className="selector" onChange={memberChangeHandler}>
							<option key={1} value="5ee8998d45cd26109c6912ca">
								Obinna
							</option>
							<option key={2} value="5ee97ef91aa37a2944f9134a">
								Hayley
							</option>
							<option key={3} value="5ee9b35fcd24192d54fb7cf2">
								Test
							</option>
						</select>
					</label>
				</div>
				<div className="form-control">
					<label className="selector-label" htmlFor="transactionType">
						Type:
						<select
							className="selector"
							onChange={transactionTypeChangeHandler}
						>
							<option key={1} value="Tool Checkout">
								Tool Checkout
							</option>
							<option key={2} value="Tool Check-in">
								Tool Check-in
							</option>
							<option key={3} value="Sign-in">
								Sign In
							</option>
							<option key={4} value="Sign-out">
								Sign Out
							</option>
							<option key={5} value="Advanced 3D-Print">
								Advanced 3D-Print
							</option>
							<option key={6} value="Training">
								Training
							</option>
							<option key={7} value="Conduct-Update">
								Conduct Update
							</option>
							<option key={8} value="Cleaning">
								Cleaning
							</option>
						</select>
					</label>
				</div>
				<ToggleButtonGroup
					value={tools}
					onChange={toolHandler}
					type="checkbox"
					aria-label="Tools"
					className="toggle-label"
				>
					<ToggleButton value="5eeb31b77884fa41402f074d" aria-label="Hammer">
						Hammer
					</ToggleButton>
					<ToggleButton
						value="5eeb31377884fa41402f074c"
						aria-label="Wire Cutter"
					>
						Wire Cutter
					</ToggleButton>
					<ToggleButton value="5eeb31d87884fa41402f074e" aria_label="DFAB-12">
						DFAB-12
					</ToggleButton>
				</ToggleButtonGroup>
				<div className="form-control">
					<label htmlFor="comment">
						Comment:
						<input type="string" value={comment} {...bindComment} />
					</label>
				</div>
				<div className="form-actions">
					<input
						type="submit"
						className="button"
						value="Create New Transaction"
					/>
				</div>
			</form>
		</div>
	);
};

export default MaintenancePage;