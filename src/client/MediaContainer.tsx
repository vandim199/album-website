import "./MediaContainer.css";

function MediaContainer(props: any) {
  return (
    <div className="MediaContainer">
      {/* <h2>Kalin</h2> */}

      <img src={props.filePath}></img>
    </div>
  );
}

export default MediaContainer;
