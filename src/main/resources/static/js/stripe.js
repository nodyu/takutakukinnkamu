const stripe = Stripe('pk_test_51QXYTJGSSGFp5Ff9G8IFkj9NNGZDkAvW3DNEWb3Jv5CYNz3K1B3kXfFhYXVAM3VNsCPwaPDxQ61eeZbiDWNaMfWX00CLDGntNh');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
stripe.redirectToCheckout({
sessionId: sessionId
})
});