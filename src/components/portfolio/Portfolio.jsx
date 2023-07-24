import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"

// import data from data.js
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio)
        break
      case "web":
        setData(webPortfolio)
        break
      case "mobile":
        setData(mobilePortfolio)
        break
      case "design":
        setData(designPortfolio)
        break
      case "content":
        setData(contentPortfolio)
        break
      default:
        setData(featuredPortfolio)
    }
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {/* Map for title on portfolio section */}
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {/* Map for content/data on portfolio section */}
        {data.map((d) => (
          <div className="item">
            <img className="img" src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
