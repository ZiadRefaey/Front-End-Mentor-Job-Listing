import iconRemove from "./assets/images/icon-remove.svg";
export default function SelectedTags({ children }) {
  return (
    <>
      <div className="flex items-center justify-between pl-2  bg-lightGreen text-darkGreen rounded-md">
        <p className="py-1 pr-2     ">{children}</p>
        <button className=" bg-darkGreen px-2 h-[100%] bg-contain  flex justify-center items-center rounded-tr-md rounded-br-md">
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
