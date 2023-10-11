import React from "react";

interface ItemProps {
    imageSource: string,
    name: string,
    description: string,
    price: number,
    availability: boolean
}

function Item (props: ItemProps) {
    return (
        <div className="item">
            <img src={props.imageSource}/>
        </div>
    )
}

export default Item