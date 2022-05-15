import React from "react"

export function Meme(){
	return(
		<form className="meme">
			<div className="meme-input">
				<input type="text" name="meme-top" id="meme-top" placeholder="Shut up" />
				<input type="text" name="meme-bottom" id="meme-bottom" placeholder="And take my money" />
			</div>
			<button>Get a new meme image</button>
		</form>
		)
}