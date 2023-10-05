import iconRemove from "./assets/images/icon-remove.svg";
export default function SelectedTags({
  children,
  selectedTags,
  setSelectedTags,
}) {
  function RemoveTag(itemToRemove) {
    const newSelectedTags = selectedTags.filter(
      (item) => item !== itemToRemove
    );
    setSelectedTags(newSelectedTags);
  }
  return (
    <>
      <div className="flex items-center justify-between pl-2  bg-lightGreen text-darkGreen rounded-md">
        <p className="py-1 pr-2     ">{children}</p>
        <button
          className=" bg-darkGreen px-2 h-[100%] bg-contain  flex justify-center items-center rounded-tr-md rounded-br-md hover:bg-Black"
          onClick={() => RemoveTag(children)}
        >
          <img
            src={iconRemove}
            alt="X icon"
            className="h-[13.5px] w-[13.5px] self-center"
          />
        </button>
      </div>
    </>
  );
}
