import React from 'react'
import '../styles/card.css'

function Card(props) {
    return(
        <div className="card">
            <h1>GitHub Profiler</h1>
            <div className="card-body">

                <form onSubmit={props.handleSubmit} className='form-box'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        placeholder='Search GitHub username'
                        name='username'
                        id='username'
                        value={props.cardData}
                        onChange= {props.handleChange}
                    />
                    <button>Search</button>
                </form>
                
                <div className='image-box'>
                    <img src={props.avatar_url} />
                </div>
                <div className="data-box">
                    <h4>Username: {props.name}</h4>
                    <p>Location: {props.location}</p>
                    <p>Repositories: {props.public_repos}</p>
                    <p>Followers: {props.followers}</p>
                    <p>Following: {props.following}</p>
                    <p>Bio: {props.bio}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;