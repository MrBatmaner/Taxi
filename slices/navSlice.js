import { createSlice } from "@reduxjs/toolkit";

//we use to push our data to

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, 
    setTravelTimeInformation } = navSlice.actions;

// Selectors (we use to grab info from)
export const selectOrigin = (state) => state.nav.origin; // go to origin and give me the current value that we have inside the data
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;