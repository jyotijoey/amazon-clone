import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Banner" />
            
            <div className="home_row">
                <Product 
                    id={3495798}
                    title="Lean Startups for Social Change: The Revolutionary Path to Big Impact"
                    image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
                    price={19.99}
                    rating={3}
                />
                <Product 
                    id={983498}
                    title="Amazon Basics Mesh Fabric Executive Mid-Back Office Desk Chair, Black"
                    image="https://m.media-amazon.com/images/I/818B-ZI78EL._AC_UL480_FMwebp_QL65_.jpg"
                    price={208.45}
                    rating={4}
                />
            </div>
            
            <div className="home_row">
                <Product 
                    id={980789}
                    title="Tatcha Kissu Lip Mask: Plumps The Look of Fine Lines & Wrinkles, 9.0 G | 0.32 oz"
                    image="https://m.media-amazon.com/images/I/51gc2TmYT0L._AC_UL480_FMwebp_QL65_.jpg"
                    price={28}
                    rating={3}
                />
                <Product 
                    id={980090}
                    title="Dell UltraSharp 24-inch FHD Monitor - U2419HX"
                    image="https://images-na.ssl-images-amazon.com/images/I/41hfQdNkRRL.jpg"
                    price={1008}
                    rating={4}
                />
                <Product 
                    id={980989}
                    title="LAMAZE Peek-A-Boo Forest, Fun Interactive Baby Book with Inspiring Rhymes and Stories, Multi, one Size (L27901B)"
                    image="https://m.media-amazon.com/images/I/51G8LfsNZzL._AC_SY200_.jpg"
                    price={203.79}
                    rating={5}
                />
            </div>
            
            <div className="home_row">
                <Product 
                    id={984455}
                    title="Unlisted by Kenneth Cole Men's Dress Shirt Slim Fit Checks and Stripes (Patterned)"
                    image="https://images-na.ssl-images-amazon.com/images/I/91Y2IOHgprL._AC_UY445_.jpg"
                    price={30.23}
                    rating={4}
                />
            </div>
            
            </div>
        </div>
    )
}

export default Home;
