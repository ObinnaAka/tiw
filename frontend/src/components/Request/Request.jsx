import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import styles from "./Request.modules.css";

// import ListItemIcon from "@material-ui/core/ListItemIcon";

const Request = ({ items, member, date, workstation }) => {
	const [open, setOpen] = React.useState(false);
	const [done, setDone] = React.useState(false);
	const [requestDone, setRequestDone] = React.useState(false);
	const [itemDone, setItemDone] = React.useState(false);

	const handleTime = (date) => {
		let newTime = new Date(date / 1000);
		var hours = newTime.getHours();
		hours = hours < 10 ? "0" + hours : hours;
		var minutes = newTime.getMinutes();
		minutes = minutes < 10 ? "0" + minutes : minutes;
		console.log(newTime);
		// newTime.setUTCMilliseconds(date);
		return hours + ":" + minutes;
	};
	const [time, setTime] = useState(handleTime(date));

	const handleItemClick = () => {
		setOpen(!open);
	};
	const handleDoneClick = () => {
		setRequestDone(!requestDone);
		requestDone
			? setDone(!done)
			: setTimeout(function () {
					setDone(!done);
			  }, 3000);
	};
	const handleItemDone = () => {
		setItemDone(!itemDone);
	};
	useEffect(() => {}, []);

	const listItems = items.slice(1).map((items, index) => (
		<List component="div" key={index} disablePadding>
			<ListItem button className={styles.nested}>
				<ToggleButton
					className="itemButton"
					type="checkbox"
					onChange={handleItemDone}
					checked={itemDone}
				/>
				<ListItemText primary={items} />
			</ListItem>
		</List>
	));
	return (
		<div className="itemDiv">
			<ToggleButton
				className="doneButton"
				type="checkbox"
				onChange={handleDoneClick}
				checked={requestDone}
			/>
			<List className="item">
				<ListItem button onClick={handleItemClick}>
					<ListItemText primary={items.length} />
					<ListItemText primary={items[0]} />
					<ListItemText primary={member.firstName + " " + member.lastName} />
					<ListItemText primary={time} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					{listItems}
					{/* <List component="div" disablePadding>
					<ListItem button className={styles.nested}>
						<ListItemIcon></ListItemIcon>
						<ListItemText primary="Starred" />
					</ListItem>
				</List> */}
				</Collapse>
			</List>
		</div>
	);
};

export default Request;
