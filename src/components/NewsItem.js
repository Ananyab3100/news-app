import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    const  {title, description,imageUrl,newsUrl,author, date,source} = this.props;

    return (
      <div className ='container my-3'>
        <div className="card" style= {{width: "18rem"}}>
      <img src={imageUrl ? imageUrl : 'https://scitechdaily.com/images/Magnetar-FRB-Concept.jpg' } className="card-img-top" alt="..."/>
      
     <div className="card-body">
    <h5 className="card-title">{title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '10%'}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
  </h5>
     <p className="card-text">{description}</p>
     <p className="card-text"><small className="text-body-secondary">By {author ? author : 'unknown'} on {new Date(date).toGMTString()}</small></p>
     <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
