import { useEffect } from "react";
import SelectedTags from "./SelectedTags";
import BgMobile from "./assets/images/bg-header-mobile.svg";
import BgDesktop from "./assets/images/bg-header-desktop.svg";
export default function TagsList({
  containerHeight,
  setContainerHeight,
  screenWidth,
  selectedTags,
  setSelectedTags,
}) {
  useEffect(() => {
    const container = document.querySelector(".selected-tags-container");

    // const height = container.offsetHeight;
    console.log(container.offsetHeight);
    setContainerHeight(container.offsetHeight);
  }, [screenWidth, containerHeight]);

  return (
    <>
      <header className="w-full h-[156px] bg-contain bg-darkGreen relative">
        {screenWidth < 600 ? (
          <img
            src={BgMobile}
            alt="Backgroud svg"
            className="w-[100%] h-[100%]"
          />
        ) : (
          <img
            src={BgDesktop}
            alt="Backgroud svg"
            className="w-[100%] h-[100%]"
          />
        )}
        <div
          style={!selectedTags.length ? { display: "none" } : {}}
          className=" absolute m-auto w-[95%] p-5 bottom-0 left-[50%] bg-white translate-y-[50%] translate-x-[-50%] rounded-md flex justify-between items-center shadow-lg selected-tags-container xl:max-w-[1110px]"
        >
          <div className="flex flex-wrap  gap-4">
            {selectedTags.map((item, index) => (
              <SelectedTags
                key={index}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              >
                {item}
              </SelectedTags>
            ))}
          </div>
          <button
            className="px-1 pt-1 ml-4 text-darkGrey md:text-2xl"
            onClick={() => setSelectedTags([])}
          >
            Clear
          </button>
        </div>
      </header>
    </>
  );
}
