import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import RouteItems from "./Route Items";

// Component main
class ItemsList extends React.Component {
  render() {
    const { header, match, itemsList } = this.props;
    return (
      <div>
        <Link to={match.url}>
          <h1>
            <u>{header}</u>
          </h1>
        </Link>
        <RouteItems itemsList={itemsList} match={match} />
      </div>
    );
  }
}

// hover item ??? execute when refresh
$(document).ready(function() {
  $(".list-group-item").hover(
    function() {
      $(this).css("background-color", "lightblue");
    },
    function() {
      $(this).css("background-color", "white");
    }
  );
});
export default ItemsList;
