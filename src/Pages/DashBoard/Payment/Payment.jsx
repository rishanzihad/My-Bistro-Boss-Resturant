import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTittle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";


const Payment = () => {
    const stripePromise =loadStripe(import.meta.env.VITE_PAYMENT)
    
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