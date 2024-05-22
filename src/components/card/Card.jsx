import Hero from "/images/illustration-hero.svg";
import Music from "/images/icon-music.svg";
import "./card.css"

export default function Card() {
    return <div className="container">
        <img src={Hero} alt="hero image" className="hero"/>
        <h1>Order Summary</h1>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className="info">
            <img src={Music} alt="music icon" className="music" />
            <div className="price">
                <h2>Annual Plan</h2>
                <h3>$59.99/year</h3>
            </div>
            <span>Change</span>
        </div>
        <button className="pay">Proceed to Payment</button>
        <button className="cancel">Cancel Order</button>
    </div>;
}