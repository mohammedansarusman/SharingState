import Panel from "./Panel"
import { useState } from "react";


const Parent = () => {
    const [showItem,setShowItem] = useState(null);
    return (
        <div>
            <Panel 
                title = "What is Netflix ?"
                flag = {showItem===0}
                onShow = { ()=>showItem===0 ? setShowItem() : setShowItem(0)}

            >
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            </Panel>
            <Panel 
                title = "How much does Netfix cost ?"
                flag = {showItem===1}
                onShow = { ()=>showItem===1 ? setShowItem() : setShowItem(1)}


            >
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from AED 29 to AED 56 a month. No extra costs, no contracts.
            </Panel>
            <Panel 
                title = "Where can I watch ?"
                flag = {showItem===2}
                onShow = { ()=> showItem===2 ? setShowItem() : setShowItem(2)}


            >
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
            </Panel>
        </div>
    )
}
export default Parent