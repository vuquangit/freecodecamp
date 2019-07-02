import React from "react";
import { Link } from "react-router-dom";
import Text2Link from "./Text2Link";

export default function ItemsList({ match, Items }) {
  return (
    <ol className="list-group" type="1">
      {Items.map(item => (
        <div key={item.id} className="list-group-item">
          {item.component ? (
            <Link to={`${match.path}/${Text2Link(item.title)}`}>
              <li>{item.title}</li>
            </Link>
          ) : (
            <li> {item.title} </li>
          )}
        </div>
      ))}
    </ol>
  );
}
