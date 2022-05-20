import React from "react"

export function Meme(){

	const [meme,setmeme]=React.useState({
		topText:'',
		randomImg:'https://i.imgflip.com/1bgw.jpg',
		bottomText:''
	})



	const [allMemeImages,setallMemeImages]=React.useState('')

	React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMemeImages(data.data.memes))
    }, [])

	function changeHandler(event){
		setmeme(prevMeme => {
			return {
				...prevMeme,
				[event.target.name]: event.target.value
			}
		})
	}

	function getMemeImage() {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setmeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
	return(
		<main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={changeHandler}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input right"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={changeHandler}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
		)
}