import ShowListItems from "./ShowListItems";

const ListItems = ({cardInfo,showIndex,setShowIndex}) => {
    const { title } = cardInfo;
    
    const handleClick = () => {
     setShowIndex();
    }

    return (
        <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({cardInfo?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {showIndex && <ShowListItems itemCards={cardInfo?.itemCards}/>}
      </div>
    </div>
    )
}

export default ListItems;