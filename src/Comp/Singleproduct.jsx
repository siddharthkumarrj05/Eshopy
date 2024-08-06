import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WhiteSpace from "./Whitespace";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart } from "../features/CartSlice";


function Singleproduct() {
  
    const dispatch = useDispatch()

  const productId = useParams();
  const { id } = productId;

  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setSingleData(result);
      });
  }, []);

  return (
    <>
      <WhiteSpace />
      <div class="product rounded-5">
        <div class="row no-gutters">
          <div
            class="col-lg-6 d-flex py-3"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div class="product-slider">
              <img
                src={singleData.image}
                alt=""
                style={{ width: "350px", mixBlendMode: "darken" }}
              />
            </div>
          </div>
          <div class="col-lg-6 rounded">
            <div class="product-content p-4 p-md-5 h-100">
              <h3 class="product-title">{singleData.title}</h3>
              <div class="product-category">{singleData.category}</div>
              <div className="d-flex gap-2 mt-2">
                {singleData.rating && (
                  <>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        value={singleData.rating.rate}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                    <p className="text-secondary h5 mb-0">
                      {singleData.rating.rate}
                    </p>
                  </>
                )}
              </div>
              <div class="product-price mt-0">{`$${singleData.price}`}</div>
              <div class="product-description">
                <p>{singleData.description}</p>
              </div>
              <div className="d-flex gap-3">
                <button class="product-button shadow rounded text-white bg-primary" onClick={()=>{dispatch(AddToCart(singleData))}}>
                  ADD TO CART</button>
                <Link to={"/"}>
                <button class="product-button rounded text-white">CANCLE</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singleproduct;
