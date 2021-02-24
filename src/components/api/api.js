import * as axios from "axios";
import React from "react";

const instanceSmallData = axios.create({
    baseURL: `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description={%7BfirstName%7D&}`
})
const instanceBigData = axios.create({
    baseURL: `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|10}`
})

export const usersAPI = {

    getSmallData(setIsLoading) {
        return instanceSmallData()
            .then(response => {
                setIsLoading(false)
                return response.data
            })
    },
    getBigData(setIsLoading) {
        return instanceBigData()
            .then(response => {
                setIsLoading(false)
                return response.data;
            })
    },
}