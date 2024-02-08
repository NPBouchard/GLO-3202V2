import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Format = ({children}) => {
    return(
        <div className="flex flex-col h-screen">
            <Header></Header>
            <main className="flex-grow">{children}</main>
            <Footer></Footer>
        </div>
    )
};

export default Format;