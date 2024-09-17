import React, { useState, useEffect } from "react";
import './App.css';

const collegesData = [
  {id: 1, rank: 1, name: "IIT Madras", location: "Chennai, Tamil Nadu", degree: "B.Tech Computer Science Engineering", fees: "₹2,09,550", placement: {average: "₹21,48,000", highest: "₹1,98,00,000"}, userReview: 8.6, ranking: "#3/131", featured: false, cutoff: "144", year: 2023},
  {id: 2, rank: 2, name: "IIT Delhi", location: "Delhi NCR", degree: "B.Tech + M.Tech Mathematics and Computing", fees: "₹2,54,650", placement: {average: "₹25,82,000", highest: "₹2,00,00,000"}, userReview: 8.7, ranking: "#1/35", featured: false, cutoff: "115", year: 2023},
  {id: 3, rank: 3, name: "Parul University", location: "Vadodara, Gujarat", degree: "B.Tech", fees: "₹1,49,000", placement: {average: "₹4,00,000", highest: "₹30,00,000"}, userReview: 8.1, ranking: "#99/147", featured: true, cutoff: "GNC", year: 2019},
  {id: 4, rank: 4, name: "IIT Bombay", location: "Mumbai, Maharashtra", degree: "B.Tech Computer Science Engineering", fees: "₹2,29,300", placement: {average: "₹21,82,000", highest: "₹3,67,00,000"}, userReview: 8.8, ranking: "#2/35", featured: false, cutoff: "66", year: 2023},
  {id: 5, rank: 5, name: "IIT Madras", location: "Chennai, Tamil Nadu", degree: "B.Tech Computer Science Engineering", fees: "₹2,09,550", placement: {average: "₹21,48,000", highest: "₹1,98,00,000"}, userReview: 8.6, ranking: "#3/131", featured: false, cutoff: "144", year: 2023},
  {id: 6, rank: 6, name: "IIT Delhi", location: "Delhi NCR", degree: "B.Tech + M.Tech Mathematics and Computing", fees: "₹2,54,650", placement: {average: "₹25,82,000", highest: "₹2,00,00,000"}, userReview: 8.7, ranking: "#1/35", featured: false, cutoff: "115", year: 2023},
  {id: 7, rank: 7, name: "Parul University", location: "Vadodara, Gujarat", degree: "B.Tech", fees: "₹1,49,000", placement: {average: "₹4,00,000", highest: "₹30,00,000"}, userReview: 8.1, ranking: "#99/147", featured: true, cutoff: "GNC", year: 2019},
  {id: 8, rank: 8, name: "IIT Bombay", location: "Mumbai, Maharashtra", degree: "B.Tech Computer Science Engineering", fees: "₹2,29,300", placement: {average: "₹21,82,000", highest: "₹3,67,00,000"}, userReview: 8.8, ranking: "#2/35", featured: false, cutoff: "66", year: 2023},
  {id: 9, rank: 9, name: "IIT Madras", location: "Chennai, Tamil Nadu", degree: "B.Tech Computer Science Engineering", fees: "₹2,09,550", placement: {average: "₹21,48,000", highest: "₹1,98,00,000"}, userReview: 8.6, ranking: "#3/131", featured: false, cutoff: "144", year: 2023},
  {id: 10, rank: 10, name: "IIT Delhi", location: "Delhi NCR", degree: "B.Tech + M.Tech Mathematics and Computing", fees: "₹2,54,650", placement: {average: "₹25,82,000", highest: "₹2,00,00,000"}, userReview: 8.7, ranking: "#1/35", featured: false, cutoff: "115", year: 2023},
  {id: 11, rank: 11, name: "Parul University", location: "Vadodara, Gujarat", degree: "B.Tech", fees: "₹1,49,000", placement: {average: "₹4,00,000", highest: "₹30,00,000"}, userReview: 8.1, ranking: "#99/147", featured: true, cutoff: "GNC", year: 2019},
  {id: 12, rank: 12, name: "IIT Bombay", location: "Mumbai, Maharashtra", degree: "B.Tech Computer Science Engineering", fees: "₹2,29,300", placement: {average: "₹21,82,000", highest: "₹3,67,00,000"}, userReview: 8.8, ranking: "#2/35", featured: false, cutoff: "66", year: 2023},
  {id: 13, rank: 13, name: "IIT Madras", location: "Chennai, Tamil Nadu", degree: "B.Tech Computer Science Engineering", fees: "₹2,09,550", placement: {average: "₹21,48,000", highest: "₹1,98,00,000"}, userReview: 8.6, ranking: "#3/131", featured: false, cutoff: "144", year: 2023},
];

function App() {
  const [colleges, setColleges] = useState(collegesData);
  const [displayCount, setDisplayCount] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");


  const sortData = (field) => {
    setSortBy(field);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");

    const sortedColleges = [...colleges].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });

    setColleges(sortedColleges);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setDisplayCount(prev => prev + 10);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const filteredColleges = colleges
    .filter((college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by college name"
        value={searchQuery}
        onChange={handleSearch}
      />
      Click on the column heading to sort
      <div className="college-list">
      <div className="header">
        <div onClick={() => sortData("rank")}>CD Rank</div>
        <div onClick={() => sortData("name")}>Colleges</div>
        <div onClick={() => sortData("fees")}>Course Fees</div>
        <div onClick={() => sortData("placement")}>Placement</div>
        <div onClick={() => sortData("userReview")}>User Reivews</div>
        <div onClick={() => sortData("ranking")}>Ranking</div>
      </div>
        {filteredColleges.slice(0, displayCount).map((college) => (
          <div key={college.id} className={`college-row ${college.featured ? "featured" : ""}`}>
            <div className="college-rank">#{college.rank}</div>
            <div className="college-details">
              <h2>{college.name}</h2>
              <p>{college.location}</p>
              {college.featured && <span className="featured-label">Featured</span>}
              <p>{college.degree}</p>
              <p>JEE-Advanced Cutoff: {college.cutoff}</p>
              <div className="actions">
                <button className="apply-btn">Apply Now</button>
                <button className="brochure-btn">Download Brochure</button>
              </div>
            </div>
            <div className="college-fees">
              <p>{college.fees}</p>
              <a href="#">Compare Fees</a>
            </div>
            <div className="college-placement">
            {college.placement.average}
              <p style={{color:'black'}}>Average Package</p>
              {college.placement.highest}
              <p style={{color:'black'}}>Highest Package </p>
              <a href="#" style={{fontSize:'14px'}}>Compare Placement</a>
            </div>
            <div className="college-reviews">
              <p>{college.userReview} / 10</p>
              <p>Based on User Reviews</p>
              <p>Best in Social Life</p>
            </div>
            <div className="college-ranking">
              <p>{college.ranking} in India</p>
              <p>{college.year}</p>
              <a href="#">More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
