/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContext = ((props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCategories, setselectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    },[selectCategories]);

    const fetchSelectedCategoryData = async (query) => {
        setLoading(true);
        const response = await fetchDataFromApi(`search?query=${query}`);
        console.log(response);
        setSearchResults(response);
        setLoading(false);
    }

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setselectCategories,
            mobileMenu,
            setMobileMenu,
            }}>
            {props.children}
        </Context.Provider>
    );

});