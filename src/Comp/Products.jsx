import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Favorite from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../features/CartSlice';

export default function Product(props) {
    const { data } = props;
    const dispatch = useDispatch();

    console.log(data)

    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        dispatch(AddToCart(data));
        setIsAdded(true);
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="imgBx">
                    <Link to={`/singleproduct/${data.id}`}>
                        <img src={data.image} alt="Product Image" />
                    </Link>
                    <ul className="action">
                        <li>
                            <Favorite />
                            <span>Add to wishlist</span>
                        </li>
                        <li onClick={handleAddToCart} className={`cart-icon ${isAdded ? 'added' : ''}`}>
                            <ShoppingCartIcon />
                            <span>Add to cart</span>
                        </li>
                        <li>
                            <Link to={`/singleproduct/${data.id}`}>
                                <InfoIcon />
                                <span>View Details</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="content">
                <div className="h5">{data.title.split(' ').slice(0, 3).join(' ')}</div>
                <div className="p paragraph pb-2">{data.description.split(' ').slice(0, 10).join(' ')}</div>
                    <div className="price-rating">
                        <h2>{`$${data.price}`}</h2>
                        <div className="rating">
                            <Stack spacing={1}>
                                <Rating
                                    name="half-rating-read"
                                    value={data.rating && data.rating.rate} 
                                    precision={0.5}
                                    readOnly
                                />
                            </Stack>
                        </div>
                    </div>
                    <button
                        className={`cart-button ${isAdded ? 'clicked' : ''}`}
                        onClick={handleAddToCart}
                        disabled={isAdded} 
                    >
                        <span className="add-to-cart">Add to cart</span>
                        <span className="added">Added</span>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-box"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
