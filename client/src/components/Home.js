import { Card, Button } from 'react-bootstrap';

import "./style.css";
// import CardsData from "./CardData";
import toast from 'react-hot-toast';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = ({ addToCart }) => {
    // const [CardsData1, setCardsData1] = useState([])
    // useEffect(() => {
    //     const productsWithQuantity = CardsData.map(product=>(
    //         {...product, title:product.dish, image:product.imgdata, qnty:0}
    //         ))
    //     setCardsData1(productsWithQuantity)

    // }, [])
    
    const [CardsData1, setCardsData1] = useState([])
useEffect(() => {
    const URL = "https://fakestoreapi.com/products"
    axios.get(URL)
    .then((res) => {
        const productsWithQuantity = res.data.map(product => (
            { ...product, qnty: 0, imgdata:product.image, dish:product.title, address:product.title, rating:product.rating.rate}));
            // { ...product, qnty: 0, imgdata:product.image, dish:product.title, address:product.title, rating:product.rating.rate}));
        setCardsData1(productsWithQuantity);
        console.log(productsWithQuantity)
    }).catch((error) => {
        console.error('Error fetching data:', error);
      });
}, [])

    const send = (element) => {
        toast.success("Item added In Your Cart");
        addToCart(element);
    };

    return (
        <>
            <section className='iteam_section mt-4 container'>
            <h2 className='px-4' style={{ fontWeight: 400 }}>Our Products</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {/* {CardsData1.map((element, index) => ( */}
                    {CardsData1.map((element, index) => (
                        <Card key={index} style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                            <Card.Img variant='top' className='cd' src={element.image} />

                            <div className="card_body">
                                <div className="upper_data d-flex justify-content-between align-items-center">
                                    <h4 className='mt-2'>{element.title}</h4>
                                    {/* <span>{element.rating}&nbsp;★</span> */}
                                </div>

                                <div className="lower_data d-flex justify-content-between ">
                                    {/* <h5>{element.address}</h5> */}
                                    <span>$ {element.price}</span>
                                    {/* ₹ */}
                                </div>
                                <div className="extra"></div>

                                <div className="last_data d-flex justify-content-between align-items-center">
                                    {/* <img src={element.arrimg} className='limg' alt="" /> */}
                                    <Button
                                        style={{ width: "150px", background: "#ff3054db", border: "none" }}
                                        variant='outline-light'
                                        className='mt-2 mb-2'
                                        onClick={() => send(element)}
                                    >
                                        Add TO Cart
                                    </Button>
                                    {/* <img src={element.delimg} className='laimg' alt="" /> */}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
