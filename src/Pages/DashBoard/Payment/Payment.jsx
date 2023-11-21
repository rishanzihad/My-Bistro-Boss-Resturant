import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTittle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";


const Payment = () => {
    const stripePromise =loadStripe(import.meta.env.VITE_PAYMENT)
    //const stripePromise =loadStripe('pk_test_51OEmMtLCZee8QAPkiPMpiuemmfKeryGyoBeOJGDS3Q6xxwktugZM6sGwWu2ygwByPan6sgcWfVyRJ3DISnNuMJQ3009X2LgGX1')
    return (
        <div>
            <SectionTitle heading='Payment' subHeading="Please Payment to Eat"> </SectionTitle>
            <div>
        <Elements stripe={stripePromise}>
        <CheckOut></CheckOut>
        </Elements>
            </div>
        </div>
    );
};

export default Payment;