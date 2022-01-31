import React from 'react';

const CharityIndexItem = ({ charity }) => {
    const tagline = charity.tagLine ? charity.tagLine : null
    return (
        <div className="charity-item">

            <div>
                <h1>
                    <a 
                    href={charity.websiteURL} 
                    target="_blank"
                    rel="noopener noreferrer">
                        {charity.charityName}
                    </a>
                </h1>
                <h3>{charity.mission}</h3>
            </div>
            
            <ul>
                <li>Tagline: {tagline}</li>
                <li>Site: <a 
                            href={charity.websiteURL} 
                            target="_blank"
                            rel="noopener noreferrer">
                                {charity.websiteURL}
                            </a>
                </li>
                <li>EIN: {charity.ein}</li>
                <li>Rating: {charity.currentRating.rating} / 4</li>
            </ul>
            
        </div>
    )
}

export default CharityIndexItem;