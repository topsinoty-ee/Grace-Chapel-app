import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import './Input.css';
export default function App() {
    return (
        <div className="m-0 grid grid-rows-1">
            <Header />
            <Main/>
            <Footer />
        </div>
    );
}


