import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div style={{display:"inline-flex"}}>
            <Link to= "/home">
            <span style={{color: "white", margin: "10px" }}>Home</span>
            </Link>
             <SearchBar onSearch={props.onSearch} />
            <Link to = "/about">
            <span style={{color: "white", margin: "10px" }} >About</span>
            </Link>
        </div>
    );
}
