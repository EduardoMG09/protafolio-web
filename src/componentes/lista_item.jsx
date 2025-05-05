import React from "react";

function ListaItem(props){
    return (
        <li className="item-list">
            {props.item_list}
        </li>
    );
}

export default ListaItem;