import React, {useEffect, useState} from "react";
import Header from "./components/pages/parts/Header";
import Footer from "./components/pages/parts/Footer";
import About from "./components/pages/content/About";
import Admin from "./components/pages/content/Admin";
import Store from "./components/pages/content/Store";
import './Page.css'

type PageContent = {
    about: JSX.Element;
    store: JSX.Element;
    admin: JSX.Element;
};

interface PageProps {
    page: keyof PageContent
}

function Page(props: PageProps) {
    const [isChecked, setIsChecked] = useState(false)

    const content = {
        about: <About isChecked={isChecked}/>,
        store: <Store/>,
        admin: <Admin/>
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setIsChecked(false)
            }
        }

        window.addEventListener('resize', handleResize)
    }, []);

    const handleCheckboxChange = (isChecked: boolean) => {
        setIsChecked(isChecked)
    }


    return (
        <div className="page">
            <Header onCheckboxChange={handleCheckboxChange}/>
            {content[props.page]}
            <Footer/>
        </div>
    )
}
export default Page