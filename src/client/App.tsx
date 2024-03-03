import "./App.css";

import { useState, useRef } from "react";
import MediaContainer from "./MediaContainer";
import FilterMenu from "./FilterMenu";

import reactLogo from "./assets/react.svg";

class media {
  filePath: string;
  constructor(filePath: string) {
    this.filePath = filePath;
  }
}

// const [image, SetImage] = useState("aaa");

function SendRest() {
  console.log("button was clicked");
  var newMedia = new media("");
  var that = this;
  // fetch("/media", { method: "GET" })
  fetch("https://reqres.in/api/users", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      newMedia = new media("public/marto.png");
      newMedia.filePath = "public/marto.png";
      // newMedia.setState({});
      that.setState({ newMedia });
      // return newMedia;
      // var newImage = document.createElement("img");
      // newImage.setAttribute("src", "/media" + data[0].filepath);
      // document.body.appendChild(newImage);
    });
  return newMedia;
}

function Fatch() {
  // const [images, SetImages] = useState("aaa");
  var newMedia = new media("");
  const fetchPost = async () => {
    const response = await fetch("/media");
    console.log(await response.json());
    newMedia.filePath = "public/marto.png";
    var data = await response.json();
    // return "public/marto.png";
    this.SetImages("public/marto.png");
  };

  // return "public/kalin.jpg";
}

function App() {
  const [children, setChildren] = useState<media[]>([]);
  const [images, SetImages] = useState([]);
  console.log(children.length);
  const filterMenu = useRef(null);

  const fetchPost = async (filter: any) => {
    const response = await fetch(filter);
    var newMedia = await response.json();
    console.log(await newMedia);
    SetImages(newMedia);
  };

  // console.log(ref.props.filters);
  const [selectedFilters, SetSelectedFilters] = useState([""]);
  let filters = ["Ivan", "Kalin", "Geri", "Marto", "Lorenco", "Alex", "Qni"];

  const handleFilterButtonClick = (person: string) => {
    if (selectedFilters.includes(person)) {
      let filters = selectedFilters.filter((el) => el !== person);
      SetSelectedFilters(filters);
      fetchPost("/media");
    } else {
      SetSelectedFilters([...selectedFilters, person]);
    }
  };

  return (
    <div className="App">
      <nav>
        <button
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            return (
              <div>
                <h1>Add Image</h1>
              </div>
            );
          }}
        >
          +
        </button>
      </nav>
      <h1>Friend Album</h1>
      <div className="card">
        <button
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            fetchPost("/media");
            // children.push(new media(images));
            console.log(children.length);
            setChildren([...children]);
          }}
        >
          Send REST API
        </button>
      </div>
      <aside>
        <h2>Filters</h2>
        <ul>
          <li>
            {filters.map((people, index) => (
              <button
                onClick={() => handleFilterButtonClick(people)}
                className={selectedFilters?.includes(people) ? "active" : ""}
                key={index}
              >
                {people}
              </button>
            ))}
          </li>
        </ul>
      </aside>
      <div id="gallery">
        {children.map((child) => {
          console.log(child.filePath);
          return <MediaContainer filePath={child.filePath} />;
        })}
        <ul>
          {images.map((child, index) => {
            return (
              <li key={index}>
                <MediaContainer filePath={child.filepath} />
              </li>
            );
          })}
        </ul>
        {/* <img src={images}></img> */}
        {/* <MediaContainer filePath={images} /> */}
        {/* <MediaContainer filePath="kalin.jpg" />
        <MediaContainer filePath="image1.png" />
        <MediaContainer filePath="image2.png" />
        <MediaContainer filePath="image3.png" />
        <MediaContainer filePath="image4.png" />
        <MediaContainer filePath="image5.png" /> */}
      </div>
    </div>
  );
}

export default App;
