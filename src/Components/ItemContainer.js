import React, { Component } from "react";
import ItemCard from "./ItemCard";

export default class ItemContainer extends Component {
  render() {
    const array = [
      {
        title: "one",
        des: "des1",
      },
      {
        title: "two",
        des: "des2",
      },
      {
        title: "two",
        des: "des2",
      },
      {
        title: "two",
        des: "des2",
      },
      {
        title: "two",
        des: "des2",
      },
      {
        title: "two",
        des: "des2",
      },
      {
        title: "two",
        des: "des2",
      },
    ];
    return (
      <div className="container=fluid my-3">
        <div className="row ">
          {array.map((x) => (
            <div className="col-md-3 my-3">
              <ItemCard title={x.title} des={x.des} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
