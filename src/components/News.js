import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
            "source": {
            "id": null,
            "name": "Gizmodo.com"
            },
            "author": "Germain Lussier",
            "title": "Ant-Man and the Wasp Quantumania First Reactions: MCU Phase 5 - Gizmodo",
            "description": "The Marvel Studios film starring Paul Rudd, Evangeline Lilly, and Jonathan Majors opens February 17.",
            "url": "https://gizmodo.com/ant-man-and-wasp-quantumania-reactions-marvel-paul-rudd-1850077940",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/21d9ccc2912dba6e3d9d228e9069214c.jpg",
            "publishedAt": "2023-02-07T05:17:00Z",
            "content": "The Multiverse Saga is about to kick into high gear. Next week, Ant-Man and the Wasp: Quantumania opens in theaters, officially ushering in the beginning of Phase 5 of the Marvel Cinematic Universe. … [+1970 chars]"
            },
            {
            "source": {
            "id": "politico",
            "name": "Politico"
            },
            "author": null,
            "title": "Texas attorney accidentally shot by Cheney during 2006 hunting trip dies - POLITICO",
            "description": "Harry Whittington was sprayed with birdshot pellets to his face, neck and chest by the vice president.",
            "url": "https://www.politico.com/news/2023/02/07/whittington-dies-cheney-shot-hunting-00081500",
            "urlToImage": "https://static.politico.com/71/92/1da4b10e42b29afe134373e26f14/obit-harry-whittington-06155.jpg",
            "publishedAt": "2023-02-07T05:08:20Z",
            "content": "Rove, an influential Republican strategist and former adviser to former President George W. Bush, said Whittington was a man of enormous integrity and deep compassion who was called on by leaders for… [+2469 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Forbes"
            },
            "author": "Erik Kain",
            "title": "Here’s The Exact Time ‘Hogwarts Legacy’ Early Access Begins On PS5, Xbox Series X And PC - Forbes",
            "description": "Here's when you can start playing Hogwarts Legacy early if you pre-ordered the Collector's Edition or the Digital Deluxe Edition.",
            "url": "https://www.forbes.com/sites/erikkain/2023/02/07/heres-the-exact-time-hogwarts-legacy-early-access-begins-on-ps5-xbox-series-x-and-pc/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63ddbb4d19d9f74be1414400/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-02-07T05:08:00Z",
            "content": "Hogwarts Legacy\r\nCredit: Warner Bros\r\nPost updated at 1:30am 2/6/2023. See update below.\r\nThe most highly-anticipated game of 2023 (so far) is almost upon us. Hogwarts Legacy, despite being enmeshed … [+8033 chars]"
            },
            {
                "source": {
                "id": null,
                "name": "Forbes"
                },
                "author": "Erik Kain",
                "title": "Here’s The Exact Time ‘Hogwarts Legacy’ Early Access Begins On PS5, Xbox Series X And PC - Forbes",
                "description": "Here's when you can start playing Hogwarts Legacy early if you pre-ordered the Collector's Edition or the Digital Deluxe Edition.",
                "url": "https://www.forbes.com/sites/erikkain/2023/02/07/heres-the-exact-time-hogwarts-legacy-early-access-begins-on-ps5-xbox-series-x-and-pc/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63ddbb4d19d9f74be1414400/0x0.jpg?format=jpg&width=1200",
                "publishedAt": "2023-02-07T05:08:00Z",
                "content": "Hogwarts Legacy\r\nCredit: Warner Bros\r\nPost updated at 1:30am 2/6/2023. See update below.\r\nThe most highly-anticipated game of 2023 (so far) is almost upon us. Hogwarts Legacy, despite being enmeshed … [+8033 chars]"
            },
    ];
    constructor() {
        super();
        console.log("this is constructor");
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }

    render() {
        return (
        <div className='container my-3'>
            <h3>Top Headlines</h3>
            <div className="row">
                {this.articles.map((element) => { 
                    return <div className="col-md-4"  key={element.source.id}>
                        <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} />
                    </div>
                })}
            </div>
        </div>
        )
    }
}
