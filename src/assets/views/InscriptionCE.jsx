import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import IncriptionInfo from "../components/InscriptionInfo/IncriptionInfo";



const InscriptionCE = () => {
    return (
        <>
        <div className="font-primary bg-background-primary">
            <Header isLoggedIn={true} />
            <IncriptionInfo />
            <Footer />
        </div>
        </>
    );
    }
    export default InscriptionCE;