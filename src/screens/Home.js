import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'


export default function Home() {

    const [search, setSearch] = useState('');

    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {

        let response = await fetch("http://localhost:5000/api/foodData", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
        // console.log(response[0],response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <div>
           
            <div> <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel" style={{ objectFit: "contain !important" }}
            >
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center">
                            <input style={{width:"100%"}}
                                className="div-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }}
                            />
                            {/* <button className="btn btn-outline-success text-white bg-successs" type="submit">
                                Search
                            </button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100"
                            style={{ width: "45px", height: "500px" }}
                            src="https://source.unsplash.com/random/900×700/?pizzas"
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            style={{ width: "45px", height: "500px" }}
                            src="https://source.unsplash.com/random/900×700/?momos"
                            alt="Second slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            style={{ width: "45px", height: "500px" }}
                            src="https://source.unsplash.com/random/900×700/?biryani"
                            alt="Third slide"
                        />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div></div>
            <div className='container'>
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (<div className='row mb-3' key={data._id}>
                                <div className="fs-3 m-3">
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                    .map(filterItems => (
                                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                                            <Card foodItem={filterItems}
                                                options={filterItems.options[0]}
                                                // imgSrc={filterItems.img}
                                            >

                                            </Card>
                                        </div>
                                    ))
                                }
                            </div>
                            )
                        })
                        : ""
                }
                {/* <Card /> */}




            </div>
            <div> <Footer /> </div>
        </div>
    )
}
