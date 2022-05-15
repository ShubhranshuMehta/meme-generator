import React from "react"
import trollface from "../assets/Troll Face.png"

export function Header(){
	return(
		<div className="header">
			<div className="header-right">
				<img className="header-right-logo" src={trollface} alt="" />
				<div className="header-right-text">Meme Generator</div>
			</div>
			<div className="header-left">React course - Project 3</div>
		</div>
		)
}