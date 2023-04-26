import React, { useEffect, useState } from "react";
import axios from "axios";


const FetchData = ({cat}) => {
  const [Data, setData] = useState("");
  useEffect(() => {
  const fetchData = async () => {
    await axios
      .get(
        cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=1153f477ab19486e8942cee5e4f5d807` : "https://newsapi.org/v2/top-headlines?country=in&apiKey=1153f477ab19486e8942cee5e4f5d807"
      )
      .then((res) => setData(res.data.articles));
  };
  
    fetchData();
  }, [cat]);
  return (
    <>
      <div style={{minHeight: "100vh"}}>
        <div className="row pt-3 justify-content-center align-items-center">
          {Data
            ? Data.map((items, index) => (
                <>
                  <div className="col-md-6" id="news-container" style={{boxShadow: "2px 2px 5px grey", borderRadius:"10px", margin: "15px", width: "30%", height: "470px"}}>
                      <img src={items.urlToImage} alt="Item not found!" className="img-fluid"/>
                    <h5>{items.title}</h5>
                    <p>{items.description}<br></br>
                    <a href={items.url} className="btn-primary btn-sm" target="blank" style={{textDecoration: "none"}}>Read More</a></p>
                  </div>
                </>
              ))
            : ""}
          </div>
      </div>
    </>
  );
};

export default FetchData