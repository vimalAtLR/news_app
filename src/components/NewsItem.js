import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem"}} >
                    <img src={imgUrl?imgUrl:"https://www.yankodesign.com/images/design_news/2023/02/terms-like-military-grade-and-aircraft-grade-are-not-indicators-of-good-quality-heres-why/military_grade_aircragt_grade_yd_editorial_1.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
