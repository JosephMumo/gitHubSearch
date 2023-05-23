import React from "react";
import Card from "./Card";

function Profiler() {
    
    const [gitData, setGitData] = React.useState([])
    const [cardData, setCardData] = React.useState('')

    const [finalData, setFinalData] = React.useState('')

    function handleChange(event) {
        const { value} = event.target
        setCardData(value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        setFinalData(cardData)
    }

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${finalData}`)
            .then(res => res.json())
            .then(data => setGitData(data)
        )
    }, [finalData])


    const newData = Object.entries(gitData).map(([key, value]) => {
        return <Card
            key={key}
            avatar_url={gitData.avatar_url}
            name={gitData.name}
            location={gitData.location}
            public_repos={gitData.public_repos}
            followers={gitData.followers}
            following={gitData.following}
            bio={gitData.bio}

            handleChange={handleChange}
            handleSubmit={handleSubmit}
            cardData={cardData}
            
        />
    })
    

    return (
        <div className='main-box'>
            {newData}
        </div>
    )
}
export default Profiler;