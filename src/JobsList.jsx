import { useEffect, useState } from "react";
import data from "./data.json";
function JobItem({
  title,
  logo,
  featured,
  position,
  role,
  New,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  setSelectedTags,
  selectedTags,
}) {
  const iconPath = data.find((item) => item.logo === logo)?.logo;

  return (
    <div
      style={featured ? { borderLeft: "5px solid #5CA5A5" } : {}}
      className="relative p-8 pb-6 lg:px-10 lg:py-8  flex items-start justify-center flex-col lg:flex-row bg-white rounded w-[95%] max-w-[1110px] md:justify-between"
    >
      <div className="flex items-center justify-start flex-col gap-2 lg:flex-row h-full  md:gap-6 min-w-[40%]">
        <div className="absolute h-12 w-12 object-contain top-0 left-6 translate-y-[-50%] lg:static lg:h-[88px] lg:w-[88px] lg:translate-y-[0px] ">
          <img
            src={iconPath}
            alt={`${title}'s logo`}
            className="w-[100%] h-[100%] "
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2 min-w-[230px] mb-4 ">
            <h3 className="text-darkGreen font-bold text-s md:text-lg">
              {title}
            </h3>
            <div className="flex items-center justify-center gap-2">
              {New ? (
                <div className="bg-darkGreen rounded-xl text-white pt-1 pb-[1px] px-2">
                  NEW!
                </div>
              ) : null}
              {featured ? (
                <div className="bg-Black rounded-xl text-white pt-1 pb-[2px] px-2 ">
                  Featured
                </div>
              ) : null}
            </div>
          </div>
          <h2 className="font-bold text-Black  text-start w-full lg:text-2xl hover:text-darkGreen cursor-pointer">
            {position}
          </h2>
          <div className="flex items-center justify-start text-start gap-2 w-full font-medium">
            <p className="text-darkGrey">{postedAt}</p>
            <p className="pb-4 text-3xl">.</p>
            <p className="text-darkGrey">{contract}</p>
            <p className="pb-4 text-3xl">.</p>
            <p className="text-darkGrey">{location}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-darkGrey mb-4 lg:hidden"></div>
      <div className="flex justify-end self-center items-center flex-wrap gap-4 font-bold w-full">
        {languages.map((language, index) => (
          <button
            onClick={() => {
              if (!selectedTags.find((el) => el === language)) {
                setSelectedTags([...selectedTags, language]);
              }
            }}
            key={index}
            className="flex items-center justify-between pl-2  bg-lightGreen text-darkGreen rounded-md pr-3 py-1 hover:bg-darkGreen hover:text-white md:text-xl"
          >
            {language}
          </button>
        ))}

        {tools.map((tool, index) => (
          <button
            onClick={() => {
              if (!selectedTags.find((el) => el === tool)) {
                setSelectedTags([...selectedTags, tool]);
              }
            }}
            key={index}
            className="flex items-center justify-between pl-2  bg-lightGreen text-darkGreen rounded-md pr-3 py-1 hover:bg-darkGreen hover:text-white md:text-xl"
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}
export default function JobsList({
  containerHeight,
  screenWidth,
  setSelectedTags,
  displayedJobs,
  selectedTags,
}) {
  const JobsListMargin = containerHeight / 2;

  return (
    <>
      <section
        key={data.id}
        style={
          screenWidth < 1024
            ? { paddingTop: `${JobsListMargin + 56}px` }
            : { paddingTop: `${JobsListMargin + 40}px` }
        }
        className="px-10 bg-lightGreen pb-8 flex items-center justify-center flex-col gap-5"
      >
        {selectedTags.length
          ? displayedJobs.map((item, i) => (
              <JobItem
                key={item.id}
                title={item.company}
                New={item.new}
                featured={item.featured}
                position={item.position}
                role={item.role}
                level={item.level}
                postedAt={item.postedAt}
                contract={item.contract}
                location={item.location}
                languages={item.languages}
                tools={item.tools}
                logo={item.logo}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            ))
          : data.map((item, i) => (
              <JobItem
                key={item.id}
                title={item.company}
                New={item.new}
                featured={item.featured}
                position={item.position}
                role={item.role}
                level={item.level}
                postedAt={item.postedAt}
                contract={item.contract}
                location={item.location}
                languages={item.languages}
                tools={item.tools}
                logo={item.logo}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            ))}
      </section>
    </>
  );
}
