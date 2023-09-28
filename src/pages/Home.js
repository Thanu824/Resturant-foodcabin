import React from 'react';
import Layout from'./../components/Layout/Layout';
import{Link} from "react-router-dom";
import "../styles/HomeStyle.css";
import Banner from "../images/Homeimage.jpg";

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`}}>
          {/*<img className='image' src={Banner}/>*/}
        <div className="headerContainer">
          <h1> Food website </h1>
          <p> Welcome to the official website of FoodCabin (SriLanka) </p>
          <Link to="/menu">
          <button>
            ORDER NOW
          </button>
          </Link>
        </div>
        </div>
    </Layout>
  )
}

export default Home