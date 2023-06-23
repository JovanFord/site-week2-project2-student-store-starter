import "./ProductDetail.css"; // Importing the CSS file for styling

import React from "react";
import { useState, useEffect } from 'react'; // Importing necessary hooks from the React library
import axios from "axios"; // Importing axios library for making HTTP requests
import { useParams } from 'react-router-dom'; // Importing useParams hook from react-router-dom for accessing URL parameters

export default function ProductDetail() {
    const { productId } = useParams(); // Getting the productId from URL parameters using useParams hook
    const [itemDetails, setItemDetails] = useState(null); // Initializing state variable itemDetails with null using useState hook

    const fetchProduct = async () => { // Creating an asynchronous function to fetch product details
        try {
            const res = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`); // Sending a GET request to the API endpoint to fetch product details
            if (res?.data?.product) { // Checking if the response data contains the product details
                setItemDetails(res.data.product); // Setting the itemDetails state variable with the fetched product details
            } else {
                console.error("Something went wrong."); // Displaying an error message if the response data does not contain the product details
            }
        } catch (err) {
            console.log(err); // Logging any errors that occur during the API request
        }
    }

    useEffect(() => { // Using the useEffect hook to fetch the product details when the component mounts
        fetchProduct();
    }, []);

    return (
        <div className="Product-card">
            <div className="product-detail">
                {itemDetails ? ( // Checking if the itemDetails state variable is not null
                    <div className="product-card">
                        <h2>{itemDetails.name}</h2>
                        <img src={itemDetails.image} />
                        <h2>{itemDetails.description}</h2>
                    </div>
                ) : (
                    <h1>loading</h1> // Displaying a loading message if the itemDetails state variable is null
                )}
            </div>
        </div>
    );
}
