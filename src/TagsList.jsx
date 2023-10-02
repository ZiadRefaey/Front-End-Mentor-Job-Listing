import "./TagsList.css";
import { useState, useEffect } from "react";
import SelectedTags from "./SelectedTags";
import BgMobile from "./assets/images/bg-header-mobile.svg";
import iconRemove from "./assets/images/icon-remove.svg";
import BgDesktop from "./assets/images/bg-header-desktop.svg";
export default function TagsList() {
  const [containerHeight, setContainerHeight] = useState(0);
  useEffect(() => {
    // Calculate the height of the container
    const container = document.querySelector(".selected-tags-container");
    if (container) {
      const height = container.offsetHeight;
      setContainerHeight(height);
    }
  }, []);

  return (
    <>
      <header className="w-full h-[156px] bg-contain bg-darkGreen relative">
        <img src={BgMobile} alt="Backgroud svg" />
        <div className=" absolute m-auto w-[95%] p-5 bottom-0 left-[50%] bg-white translate-y-[50%] translate-x-[-50%] rounded-md flex justify-between items-center shadow-lg selected-tags-container xl:max-w-[1110px]">
          <div className="flex flex-wrap  gap-4">
            <SelectedTags>CSS</SelectedTags>
            <SelectedTags>JS</SelectedTags>
            <SelectedTags>HTML</SelectedTags>
          </div>
          <button className="px-1 pt-1 ml-4 text-darkGrey   ">Clear</button>
        </div>
      </header>
    </>
  );
}
