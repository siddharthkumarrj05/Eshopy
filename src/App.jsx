import NavBar from './Comp/Navbar.jsx'
import Footer from './Comp/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Comp/Home.jsx';
import { useEffect, useState } from 'react';
import Wishlistpage from './Comp/Wishlist.jsx';
import Cart from './Comp/cart.jsx';
import Singleproduct from './Comp/Singleproduct.jsx';
import WhiteSpace from './Comp/Whitespace.jsx';

function App() {
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((result) => {
                setProduct(result);
                console.log(result)
            });
    },[]);

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <WhiteSpace/>
                <Routes>
                    <Route path='/' element={<Homepage productData={Product} />} />
                    <Route path='/wishlist' element={<Wishlistpage/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/singleproduct/:id' element={<Singleproduct/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
