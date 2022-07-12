export default function Pagination({size, number, onNext, onBack}) {
    return <>
        <div className="grid grid-cols-3 gap-4 border-t-2 border-t-gray-200">
            <button className="col-span-1 m-1 rounded p-1/2 hover:bg-gray-200" onClick={onBack}>
                {"<"}
            </button>
            <div className="col-span-1 p-2">
                {number} / {size}
            </div>
            <button className="col-span-1 m-1 rounded p-1/2 hover:bg-gray-200" onClick={onNext}>
                {">"}
            </button>
        </div>
    </>
}