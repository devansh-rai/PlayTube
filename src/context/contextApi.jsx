/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();
 
export const AppContext = ((props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    },[selectedCategory]);

    const fetchSelectedCategoryData = async (query) => {
        setLoading(true);
        const response = await fetchDataFromApi(`search?query=${query}`);
        // console.log(response);
        setSearchResults(response.contents);
        setLoading(false);
    }

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectedCategory,
            setSelectedCategory,
            mobileMenu,
            setMobileMenu,
            }}>
            {props.children}
        </Context.Provider>
    );

});