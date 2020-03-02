import React, { Component } from "react";
import Config from "./config.json";

class AppIcon extends Component {
	render() {
		return (
			<img
				className={this.props.className}
				src={Config.icon}
				style={this.props.style}
				alt={Config.name + " app icon"}
			/>
		);
	}
}

export default AppIcon;
