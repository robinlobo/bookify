import React from "react";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "biography",
          imageUrl: "https://images.unsplash.com/photo-1528309819786-7671da26b42c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=393&q=80",
          id: 1,
          linkUrl: "shop/biography"
        },
        {
          title: "fantasy",
          imageUrl: "https://images.unsplash.com/photo-1515816052601-210d5501d471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
          id: 2,
          linkUrl: "shop/fantasy"
        },
        {
          title: "nonfiction",
          imageUrl: "https://images.unsplash.com/photo-1565116175827-64847f972a3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 3,
          linkUrl: "shop/nonfiction"
        },
        {
          title: "pschology",
          imageUrl: "https://images.unsplash.com/photo-1570599560373-92ba6bb38cfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
          size: "large",
          id: 4,
          linkUrl: "shop/pschology"
        },
        {
          title: "science",
          imageUrl: "https://images.unsplash.com/photo-1569000972106-9ebf8c4edad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          size: "large",
          id: 5,
          linkUrl: "shop/science"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
          { this.state.sections.map(
              ({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps}/>          
              )
          ) }
      </div>
    );
  }
}

export default Directory;
