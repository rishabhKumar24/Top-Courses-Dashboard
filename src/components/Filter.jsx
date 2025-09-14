

export const Filter = (props) => {
    console.log("Filter rendered");
    let filterData = props.filterData;
    let category  = props.category;
    let setCategory = props.setCategory;
    function filterHandler(title) {
        setCategory(title);
    }

    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map((data) => {
                return(
                    <button key = {data.id} onClick={() => {filterHandler(data.title)}} 
                    className={`bg-blue-950 text-white px-4 py-2 rounded-md
                      hover:bg-blue-700 transition duration-300 ${category === data.title ? 'border-white bg-opacity-60' : 'bg-opacity-40 border-green-500'}`}>
                        {data.title}
                    </button>
                )
            })}
        </div>
    );
};
