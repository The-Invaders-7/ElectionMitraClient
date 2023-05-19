import React, { useState, useEffect } from "react";
import axios from "axios";
import { Users } from "./Users";
import "./QueryingPage.css";
import Table from "./table";
import Item from "./item";
import Print from '../../Images/Download.png';
import Print1 from '../../Images/Download1.png';
import Print2 from '../../Images/Download2.png';
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const QueryingPage = () => {
  const [query, setQuery] = useState("");
  const [key, setkey] = useState("voterID");
  const keys = [key];
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [firstName,setFirstName]=useState("");
  const [middleName,setMiddleName]=useState("");
  const [lastName,setLastName]=useState("");
  // const [age,setAge]=useState("");
  const [city,setCity]=useState("");
  const [ward,setWard]=useState("");
  const [voterID,setVoterID]=useState("");
  const [totalPages,setTotalPages]=useState(0);
  const [currentPage,setCurrentPage]=useState(0);
  // const [base64String, setBase64String] = useState('');
  // const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getData();
  },[firstName,middleName,lastName,city,voterID,ward,currentPage]);

  const getData = async (e) => {
    // console.log("FirstName "+firstName+" Middle Name "+middleName+" Last Name "+lastName+" City "+city+" Ward "+ward+" VoterId "+voterID);
    // if(age==""){
      console.log("Current Page now "+currentPage);
    await axios
    .get(`http://localhost:8080/user/get?voterID=${voterID}&firstName=${firstName}&middleName=${middleName}&lastName=${lastName}&gender=&age=-1&imageString=&district=&city=${city}&ward=${ward}&pageNo=${currentPage}`)
    .then((response) => {
      console.log(response);
      console.log(response.data.totalPages);
      console.log(response.data.voterList);
      setData(response.data.voterList);
      setTotalPages(response.data.totalPages);
      console.log("Total Pages "+ response.data.totalPages);
      console.log(`Current Pages ${currentPage}`);
    })
    .catch(function (error) {
      console.log(error);
    });
    // }
    // else{
    //   await axios
    //   .get(`http://localhost:8080/user/get?voterID=${voterID}&firstName=${firstName}&middleName=${middleName}&lastName=${lastName}&gender=&age=-1&imageString=&district=&city=&ward=${ward}&pageNo=${currentPage}`)
    //   .then((response) => {
    //     setData(response.data.voterList);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }
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

  const handleConvertClick = (img) => {
    if (img) {
      const image = new Image();
      image.src = `data:image/png;base64, ${img}`;
      return image.src;
    }
  };

  const handleDownloadClick = (img) => {
    const link = document.createElement('a');
    link.href = handleConvertClick(img);;
    link.download = 'image.png';
    link.click();
  };

  function generatePaginationButtons() {
    if(totalPages>0 && document.getElementById('pagination')!=null){
      console.log("Total Pages "+totalPages);
      const paginationContainer = document.getElementById('pagination');
      paginationContainer.innerHTML = '';
      // paginationContainer.append(<li class="page-btn" data-page="801"><a>801</a></li><li class="next-btn" data-page="2"><span aria-hidden="true">» </span></li>);
      if(currentPage>=totalPages){
        setCurrentPage(0);
      }
      let block=currentPage>0?((currentPage-currentPage%20))/20:0;
      let startBlockPage=currentPage>0?((currentPage-currentPage%20))/20:0;
      startBlockPage*=20;
      console.log(startBlockPage);
      const lastBlockPage=(startBlockPage+5)<totalPages?startBlockPage+20:totalPages;
      console.log("Current Pages "+currentPage+" "+" startBlockPage "+startBlockPage+" lastBlockPage "+lastBlockPage);
      for (let i = startBlockPage; i <= lastBlockPage+1; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if(i==startBlockPage){
          button.textContent = "« ";
        }
        else if(i==(lastBlockPage+1)){
          button.textContent = "» ";
        }

        if(i==0 && currentPage<=0){
          button.hidden=true;
        }
        else if(i==(totalPages+1) && currentPage>=(totalPages-1)){
          button.hidden=true;
        }
        
        // Add an event listener to handle button click
        button.addEventListener('click', function () {
          
          if(i==startBlockPage){
            setCurrentPage(currentPage-1);
          }
          else if(i==(lastBlockPage+1)){
            setCurrentPage(currentPage+1);
          }
          else{
            setCurrentPage(i-1);
          }
        });
        paginationContainer.appendChild(button);
      }
    }
    else if(document.getElementById('pagination')!=null){
      const paginationContainer = document.getElementById('pagination');
      paginationContainer.innerHTML = '';
    }
  }

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
        <input type="text" class="search" placeholder="City" onChange={e=>setCity(e.target.value)}/>
        <input type="text" class="search" placeholder="Ward" onChange={e=>setWard(e.target.value)}/>
        <input type="text" class="search" placeholder="Voter ID" onChange={e=>setVoterID(e.target.value)}/>
      </div>
      <br/>
      <br/>
      <div class="container mx-auto" id="header">
        <div className="grid grid-cols-7 gap-4" id="whiteText">
          <div className="">voterID</div>
          <div>Ward</div>
          <div>First Name</div>
          <div>Middle Name</div>
          <div>Last Name</div>
          <div>Gender</div>
          <div>Print Receipt</div>
        </div>
      </div>

      {/* <div className=''> */}
      <div onScroll={firstEvent} className="container1">
        {data.map((item) => {
          return (
            <div class="container mx-auto">
              <div className="grid grid-cols-7 gap-4">
                {console.log(item)}
                <div className="">{item.voterID}</div>
                <div>{item.ward}</div>
                <div>{item.firstName}</div>
                <div>{item.middleName}</div>
                <div>{item.lastName}</div>
                <div>{item.gender}</div>
                <div><button onClick={()=>{handleDownloadClick(item.imageString)}}>
                      <img src={Print2} alt="Print Image"/>
                    </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div id="pagination">{generatePaginationButtons()}</div>

      <nav class="pagination-base__aILV">
        {generatePaginationButtons()}

        {/* <ul>{Array.from(Array(totalPages), (e, i) => {
          <li key={i}>{i}</li>
        })}</ul>

        <ul class="pagination"><li class="prev-btn disabled"><span aria-hidden="true">« </span></li>
        { {for(let i=0;i<=totalPages;i++){

        }} 
        }
        <li class="active page-btn"><a>1</a></li><li class="page-btn" data-page="2"><a>2</a></li>
        <li class="page-btn" data-page="3"><a>3</a></li><li class="disabled page-btn"><a>...</a></li>
        <li class="page-btn" data-page="801"><a>801</a></li><li class="next-btn" data-page="2"><span aria-hidden="true">» </span></li>
        </ul> */}
        </nav>



    </div>
  );
};

export default QueryingPage;
