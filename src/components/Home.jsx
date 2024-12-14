import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () =>{
    const [title, setTitle] = useState('')
    const [value, setValue] =useState('')
    const [searchParams, setSearchPramas] = useState('')
    //const pasteId = searchParams.get("pasteId");

    return (
        <div>
            <input 
            className="p-2 rounded-2xl"
            type="text"
            placeholder="Enter title here"
            value = {title}
            onChange={(e)=>setTitle(e.target.value)}
            />

            <button>
                Create My Paste
            </button>
        </div>
    );
};

export default Home