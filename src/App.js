import React from "react"
import {Header} from "./components/Header.js"
import {Meme} from "./components/Meme.js"

export function App(){
	return(
		<div className="App">
			<Header />
			<Meme />
		</div>
		)
}