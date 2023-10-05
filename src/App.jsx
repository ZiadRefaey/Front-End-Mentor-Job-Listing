import "./App.css";
import TagsList from "./TagsList";
import JobsList from "./JobsList";
import { useState, useEffect } from "react";
import data from "./data";

function App() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [containerHeight, setContainerHeight] = useState(72);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  useEffect(() => {
    const filteredData = data.filter((item) => {
      return selectedTags.every(
        (tag) => item.languages.includes(tag) || item.tools.includes(tag)
      );
    });
    setDisplayedJobs(filteredData);
  }, [selectedTags, setDisplayedJobs]);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.screen.width);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);
  return (
    <>
      <TagsList
        setContainerHeight={setContainerHeight}
        containerHeight={containerHeight}
        screenWidth={screenWidth}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        setDisplayedJobs={setDisplayedJobs}
      />
      <JobsList
        containerHeight={containerHeight}
        screenWidth={screenWidth}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        displayedJobs={displayedJobs}
      />
    </>
  );
}

export default App;
