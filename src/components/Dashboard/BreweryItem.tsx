import { IBrewery } from "./BreweriesList";
import './css/BreweryItem.css'
import { BsFillTrashFill, BsFileBarGraph, BsTelephone } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import React, { useEffect, useState } from "react";

interface IProps {
    brewery: IBrewery,
    key: string,
    handleDelete(key:any): any
}

function BreweryItem({brewery, handleDelete}:IProps){

    return (
        <div className="listItem">
            <div className="deleteIcon">
                    <BsFillTrashFill onClick={() => handleDelete(brewery.id)} />
            </div>
            <h2>{brewery.name}</h2>
            <p>{brewery.street}</p>
            <p>{brewery.city.concat(", ", brewery.state, " - ", brewery.country)}</p>
            <div className="listItem__tags">
                <div className="listItem__tags__content"><BsFileBarGraph className="listItem__tags__content__icon" />{brewery.brewery_type}</div>
                <div className="listItem__tags__content"><GoLocation className="listItem__tags__content__icon" />{brewery.postal_code}</div>
                <div className="listItem__tags__content"><BsTelephone className="listItem__tags__content__icon" />{brewery.phone ? brewery.phone : "No phone"}</div>
            </div>
        </div>
    );
}

export default BreweryItem;