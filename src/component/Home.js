import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Home.css";
import { Navigate, useNavigate } from "react-router";
function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/carts").then((res) => {
      const productArr = [];

      for (let i = 0; i < res.data.carts.length; i++) {
        if (typeof res.data.carts[i].products[i] != "undefined") {
          productArr.push(res.data.carts[i].products[i]);
        } else {
          // console.log("undefined");
        }
      }
      setProducts(productArr);
    });
  }, []);
  function logoutBtn()
  {
    navigate("/");
  }

  return (
    <div className="home-container">
                <div className="logout"> 
      <input type="submit" value="Logout" 
      onClick={() => logoutBtn()}/>
      </div>
    <div className="sub-container">
   
      <div className="list-container ">
     
        <div className="product"> Product List</div>

        {products.map((e, index) => {
          // console.log(e)
          return (
            <Card className="card-container " key={e.id} >
              <div className="list-item2">
                Discount :
                <label className="label-discount" htmlFor="">
                  {e.discountPercentage}%
                </label>
              </div>

              <ListGroup  variant="flush" className="list-group">
                <ListGroup.Item className="list-item">{e.title}</ListGroup.Item>
                <ListGroup.Item className="list-item">
                  ₹ {e.price}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Home;
