import { MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { DeleteCartItem } from "../features/CartSlice";
import { Link } from "react-router-dom";
export default function ReviewPage() {

  const cartData = useSelector((state) => state.CartData.cart);
  const dispatch = useDispatch();

  return (
    <section className="py-5" style={{ backgroundColor: "#dcdcdc" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100 bg-white p-3 rounded-4">
          <MDBCol>
            <p>
              <span className="h2">Cart - {cartData.length} item{cartData.length > 1 ? 's' : ''} </span>
            </p>

            {
                
                cartData.length === 0 ? <h2 style={{color:'red',}}>Your shopping cart is empty...</h2> : cartData.map((value) => (

              <MDBCard className="mb-4">
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol md="2">
                      <MDBCardImage className="rounded" fluid src={value.image} alt="Product image"/>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Product Name</p>
                        <p className="lead fw-normal mb-0">{value.title}</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Rating</p>
                        <p className="lead fw-normal mb-0">
                          <Stack spacing={1}>
                            <Rating
                              name="half-rating-read"
                              value={value.rating && value.rating.rate}
                              precision={0.5}
                              readOnly
                            />
                          </Stack>
                        </p>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Quantity</p>
                        <div className="d-flex align-items-center">
                          <MDBBtn className="btn-primary" size="sm">
                            <FaMinus />
                          </MDBBtn>
                          <p className="lead fw-normal mb-0 mx-2">2</p>
                          <MDBBtn className="btn-primary" size="sm">
                            <FaPlus />
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Price</p>
                        <p className="lead fw-normal mb-0">${value.price}</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="1" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Total</p>
                        <p className="lead fw-normal mb-0">{`${ 2 * value.price}`}</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="1" className="d-flex justify-content-center text-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Delete</p>
                        <MDBIcon fas icon="trash text-danger" style={{cursor: 'pointer',}} size="lg" onClick={()=>{dispatch(DeleteCartItem(value))}} />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            ))}

            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">$ 999</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end">
              <Link to={'/'}>
                <MDBBtn size="lg" className="me-2 bg-success">
                  Continue shopping
                </MDBBtn>
              </Link>
              <MDBBtn size="lg">Add to cart</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
