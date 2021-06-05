import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  console.log(price);
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hj4W6L4rTsscwn2sh20TwCiEI5dVcG99S8ogSNu0ohOy5Uw4aoi2ytrMFttoSqxSgO49zlZfgd5MsjJcZorL53C009tovRWF5";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Puzzles"
      billingAddress
      shippingAddress
      allowRememberMe
      image="../../../public/favicon.ico"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
