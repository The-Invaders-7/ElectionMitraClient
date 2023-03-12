import React, { useState, useEffect } from "react";
import axios from "axios";
import { Users } from "./Users";
import "./QueryingPage.css";
import Table from "./table";
import Item from "./item";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const QueryingPage = () => {
  const [query, setQuery] = useState("");
  const [key, setkey] = useState("voterId");
  const keys = [key];
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [firstName,setFirstName]=useState("");
  const [middleName,setMiddleName]=useState("");
  const [lastName,setLastName]=useState("");
  const [age,setAge]=useState("");
  const [ward,setWard]=useState("");
  const [voterId,setVoterId]=useState("");

  useEffect(() => {
    getData();
  },[firstName,middleName,lastName,age,voterId,ward]);

  const getData = async (e) => {
    console.log("FirstName "+firstName+" Middle Name "+middleName+" Last Name "+lastName+" age "+age+" Ward "+ward+" VoterId "+voterId);
    if(age==""){
      console.log("Age");
      await axios
      .get(`http://localhost:8080/user/get?voterId=${voterId}&firstName=${firstName}&middleName=${middleName}&lastName=${lastName}&gender&age=-1&district&city&ward=${ward}&pageNo=0`)
      .then((response) => {
        console.log(response);
        console.log(response.data.totalPages);
        console.log(response.data.voterList);
        setData(response.data.voterList);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      await axios
      .get(`http://localhost:8080/user/get?voterId=${voterId}&firstName=${firstName}&middleName=${middleName}&lastName=${lastName}&gender&age=${age}&district&city&ward=${ward}&pageNo=0`)
      .then((response) => {
        setData(response.data.voterList);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };

  // const selectOption = async (val) => {
  //   await getData();
  //   setkey(val);
  //   setData(Search(data));
  // };

  // const Search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().startsWith(query))
  //   );
  // };

  const firstEvent = (e) => {
    var bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
    if (bottom) {
      let pg = pageNo + 1;
      setPageNo(pg);
      getData();
    }
  };

  return (
    <div className="app">
      {/* <label className="dropDown">
        Filter By:
        <select
          className="select"
          onChange={(e) => selectOption(e.target.value)}
        >
          <option value="voterId">Voter ID</option>

          <option value="firstName">First Name</option>

          <option value="lastName">Last Name</option>

          <option value="middleName">Middle Name</option>

          <option value="ward">Ward</option>
        </select>
      </label> */}

      {/* <input
        className="search"
        placeholder="Search Voter"
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase()).then(() => {
            setData(Search(data));
          });
        }}
      /> */}

      <br></br>

      <div class="search-container">
        <input type="text" class="search" placeholder="First Name" onChange={e=>setFirstName(e.target.value)}/>
        <input type="text" class="search" placeholder="Middle Name" onChange={e=>setMiddleName(e.target.value)}/>
        <input type="text" class="search" placeholder="Last Name" onChange={e=>setLastName(e.target.value)}/>
      </div>
      <div class="search-container">
        <input type="text" class="search" placeholder="Age" onChange={e=>setAge(e.target.value)}/>
        <input type="text" class="search" placeholder="Ward" onChange={e=>setWard(e.target.value)}/>
        <input type="text" class="search" placeholder="Voter ID" onChange={e=>setVoterId(e.target.value)}/>
      </div>
      <br/>
      <br/>
      <div class="container mx-auto" id="header">
        <div className="grid grid-cols-7 gap-4" id="whiteText">
          <div className="">VoterId</div>
          <div>Ward</div>
          <div>First Name</div>
          <div>Middle Name</div>
          <div>Last Name</div>
          <div>Gender</div>
          <div>Age</div>
        </div>
      </div>

      {/* <div className=''> */}
      <div onScroll={firstEvent} className="container1">
        {data.map((item) => {
          return (
            <div class="container mx-auto">
              <div className="grid grid-cols-7 gap-4">
                <div className="">{item.voterId}</div>
                <div>{item.ward}</div>
                <div>{item.firstName}</div>
                <div>{item.middleName}</div>
                <div>{item.lastName}</div>
                <div>{item.gender}</div>
                <div>{item.age}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QueryingPage;
