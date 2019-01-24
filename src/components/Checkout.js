import React, { Component } from 'react'
import { Form, Container, Row, Col, Image, FormControl, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div>

        <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; 2017-2018 Company Name</p>
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="#">Privacy</Link></li>
                <li className="list-inline-item"><Link to="#">Terms</Link></li>
                <li className="list-inline-item"><Link to="#">Support</Link></li>
            </ul>
        </footer>
    </div>
);

const Header = () => (
    <div>
        <div className="py-5 text-center">
            <Image className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h2>Checkout form</h2>
            <p className="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>

    </div>
)

const YourCart = () => (

    <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">Third item</h6>
                    <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
            </li>
        </ul>


        <form className="card p-2">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
            </div>
        </form>
    </div>

);

const BillingAddress = () => (
    <div>

        <h4 className="mb-3">Billing address</h4>
        <Form>
            <Form.Row>
                <Col>
                    <Form.Group className="col-md-6 mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" id="firstName" placeholder="" required />
                        <FormControl.Feedback type="invalid">
                            Valid first name is required.
                        </FormControl.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="col-md-6 mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" id="lastName" placeholder="" required />
                        <FormControl.Feedback type="invalid">
                            Valid last name is required.
                        </FormControl.Feedback>
                    </Form.Group>
                </Col>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    </InputGroup.Prepend>

                    <Form.Control type="text" id="lastName" placeholder="" required />

                    <Form.Control.Feedback type="invalid">
                        Valid user name is required.
                        </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlEmail">
                <Form.Label> Email </Form.Label>
                <Form.Control type="email" />
                <Form.Control.Feedback type="invalid">
                    Please enter a valid email address for shipping updates.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="exampleForm.address">
                <Form.Label> Address </Form.Label>
                <Form.Control type="text" placeholder="1234 Main St" required />
                <Form.Control.Feedback type="invalid">
                    Please enter your shipping address.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controllerId="example.address2">
                <Form.Label>Address 2 <span className="text-muted"> (Optional) </span> </Form.Label>
                <Form.Control type="text" placeholder="Apartment of suite" />
            </Form.Group>

            <Form.Row>

                <Form.Group className="col-md-5 mb-3" controllerId="exampleForm.country">
                    <Form.Label> Country </Form.Label>
                    <Form.Control as="select">
                        <option>United States</option>
                        <option>Canada</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please select a valid country.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="col-md-4 mb-3">
                    <Form.Label> State </Form.Label>
                    <Form.Control as="select">
                        <option value="">Choose...</option>
                        <option>Oregon</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid sate.
                    </Form.Control.Feedback>
                </Form.Group>


                <Form.Group className="col-md-3 mb-3">
                    <Form.Label> Zip </Form.Label>
                    <Form.Control type="text" required>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Zip code required.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <hr className="mb-4" />

            <Form.Check aria-label="option 1" label="Shipping address is the same as my billing address" />

            <Form.Check label="Save this information for next time"></Form.Check>
        </Form>

    </div >

);

const Payment = () => (
    <div>

        <h4 className="mb-3">Payment</h4>

        <Form>
            <Form.Group >
                <Form.Check type="radio" label="Credit card" />
                <Form.Check type="radio" label="Debit card" />
                <Form.Check type="radio" label="Paypal" />
            </Form.Group>

            <Form.Row>
                <Form.Group className="col-md-6 mb-3">
                    <Form.Label>
                        Name on card
                        <small className="text-muted"> Full name as displayed on card</small>
                    </Form.Label>
                    <Form.Control type="text" required />
                    <Form.Control.Feedback type="invalid">
                        Name on card is required
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                    <Form.Label>
                        Credit card number
                    </Form.Label>
                    <Form.Control type="text" placeholder="" required />
                    <Form.Control.Feedback type="invalid">
                        Credit card number is required
                    </Form.Control.Feedback>

                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group classname="col-md-3 mb-3">
                    <Form.Label>
                        Expiration
                    </Form.Label>
                    <Form.Control type="text" required />
                    <Form.Control.Feedback type="invalid">
                        Expiration date required
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-md-3 mb-3">
                    <Form.Label>
                        CVV
                    </Form.Label>
                    <Form.Control type="text" required />
                    <Form.Control.Feedback type="invalid" >
                        Security code required
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <hr class="mb-4" />
            <Button variety="primary">Continue to checkout</Button>
        </Form>
    </div>
);


export default class Checkout extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header />
                    <Row>

                        <YourCart />
                        <Col>
                            <BillingAddress />
                            <hr className="mb-4" />
                            <Payment />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}
