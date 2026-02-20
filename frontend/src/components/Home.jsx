import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="home">

            {/* Hero Section */}
            <section className="hero">
                <h1>Big Sale is Live!</h1>
                <p>Up to 50% OFF on Electronics & Fashion</p>
                <button className="btn">Shop Now</button>
            </section>

            {/* Categories */}
            <section className="section">
                <h2>Shop by Category</h2>
                <div className="grid">

                    <div className="card">
                        <img src="https://picsum.photos/400/300?random=1" alt="Electronics" />
                        <p>Electronics</p>
                    </div>

                    <div className="card">
                        <img src="https://picsum.photos/400/300?random=2" alt="Fashion" />
                        <p>Fashion</p>
                    </div>

                    <div className="card">
                        <img src="https://picsum.photos/400/300?random=3" alt="Home Appliances" />
                        <p>Home Appliances</p>
                    </div>

                    <div className="card">
                        <img src="https://picsum.photos/400/300?random=4" alt="Books" />
                        <p>Books</p>
                    </div>

                </div>
            </section>

            {/* Featured Products */}
            <section className="section">
                <h2>Featured Products</h2>
                <div className="grid">

                    <div className="product-card">
    <img 
        src="https://picsum.photos/300/250?random=5" 
        alt="Smartphone" 
    />
    <h4>iQOO Smartphone</h4>
    <p>₹15,999</p>

    <a
        href="https://www.amazon.in/iQOO-Dimensity-Processor-Military-Grade-Durability/dp/B0F2T5RBCW"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-small"
    >
        Buy on Amazon
    </a>
</div>
                    <div className="product-card">
                        <img src="https://picsum.photos/300/250?random=6" alt="Product" />
                        <h4>Headphones</h4>
                        <p>₹1,999</p>
                        <button className="btn-small">Add to Cart</button>
                    </div>

                    <div className="product-card">
                        <img src="https://picsum.photos/300/250?random=7" alt="Product" />
                        <h4>Watch</h4>
                        <p>₹2,499</p>
                        <button className="btn-small">Add to Cart</button>
                    </div>

                </div>
            </section>

            {/* Offer Banner */}
            <section className="offer">
                <h2>Free Delivery on Orders Above ₹999</h2>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2026 ShopEase. All Rights Reserved.</p>
            </footer>

        </div>
    )
}

export default Home