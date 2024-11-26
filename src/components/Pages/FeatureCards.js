import React from 'react';
import './FeatureCards.css'; // Import CSS for custom styling

const FeatureCards = () => {
    return (
        <div className="feature-cards-container" >
            <div className="card">
                <div className="icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.001 18.75L21 9.75L14.251 1.25" stroke="#F46036" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 18.75H12.001V18.75" stroke="#F46036" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.75 18.75L9.75 9.75L1.25 1.25" stroke="#F46036" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h3>5,320 online courses</h3>
                <p>Enjoy a variety of fresh topics</p>
            </div>

            <div className="card">
                <div className="icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 12C18 16.4183 14.4183 20 10 20C5.58173 20 2 16.4183 2 12C2 7.58173 5.58173 4 10 4C14.4183 4 18 7.58173 18 12Z" stroke="#F46036" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 22L15 15" stroke="#F46036" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h3>Expert instruction</h3>
                <p>Find the right instructor</p>
            </div>

            <div className="card">
                <div className="icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1C17.523 1 22 5.477 22 11C22 16.523 17.523 21 12 21C6.477 21 2 16.523 2 11C2 5.477 6.477 1 12 1Z" stroke="#F46036" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5V11L15 13" stroke="#F46036" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h3>Lifetime access</h3>
                <p>Learn on your schedule</p>
            </div>
        </div>
    );
};

export default FeatureCards;
