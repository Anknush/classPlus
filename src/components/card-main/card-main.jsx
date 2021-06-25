import React from "react"
import "./card-main.styles.css"
import { Card } from "../card-component/card-components"
export const CardApp=(props)=>(
    <div className="card-main">
        {props.Locations.map(location=><Card key={location.id} location={location}/>)}
    </div>
)