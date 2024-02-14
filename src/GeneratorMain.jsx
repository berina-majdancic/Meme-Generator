import React from 'react';
import Form from "./Form"
export default function GeneratorMain(){

    const [allMemes,setAllMemes]=React.useState([])
    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomMeme: "https://i.imgflip.com/1itoun.jpg"
    });
    function randomUrl(){
        const randNum=Math.floor(Math.random()*allMemes.length);
        const randUrl=allMemes[randNum].url;
        console.log(randUrl);
        setMeme(prev=>(
            {
                ...prev,
                 randomMeme:randUrl
            }
        ));
    }
    function handleChange(event){
        setMeme(prev=>(
            {...prev,[event.target.name]: event.target.value}
        ))
        console.log(meme)
    }
    return(
        <>
            <div className=""> 
                <Form memeState={meme}  setMemeState={handleChange}/>
                <div className="flex justify-center mx-10">
                        <button onClick={randomUrl} className="w-[100%]  h-9 bg-white border-0 mt-3 rounded-sm 
                         hover:bg-pink-300 hover:text-white transition duration-[600ms]">Get a new meme image</button>
                    </div>
                <div className='relative flex justify-center my-10 w-[100%] mr-2 max-h-[100%]'>
                    <img src={meme.randomMeme} className=' max-w-[95%] max-h-[300px] rounded-md grow object-contain sm:max-w-[90%] lg:max-h-[600px]'/>
                    <h1 className="absolute text-white uppercase text-center font-outline-1">{meme.topText}</h1>
                    <h1 className="absolute bottom-0 uppercase text-white drop-shadow-lg font-outline-1 text-center">{meme.bottomText}</h1></div>
            </div>
        </>
    )
}