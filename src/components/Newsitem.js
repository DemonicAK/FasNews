import React from "react";

function  Newsitem (props) {

    let { title, description, imageurl, newsurl,author,date } = props;
    // let d=new Date(date).toGMTString() 
    return (
      <div>
        {/* style={{ width: "18rem" }} */}
        <div className="card" >
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"> <small className="text-muted">  by {author?author:"Unknown"} on {new Date(date).toGMTString() }</small> </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
