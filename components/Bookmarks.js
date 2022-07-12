import { useContext, useState } from "react";
import BookmarkContext from '../lib/context'
import Pagination from "./Pagination"

export default function Bookmarks() {
    const {bookmarks, setBookmarks} = useContext(BookmarkContext);  
    const [number, setNumber] = useState(1)
    const size = process.env.PAGE_SIZE || 5
    const empty = "                   "

    const getBookmarks = () => {
        const slice = bookmarks.slice((number - 1) * size, number * size)
        const diff = size - slice.length
        return [...slice, ...[...Array(diff).keys()].map(_ => empty)]
            .map((url, idx) => {
                const isEmpty = slice.length > idx
                const key = ((number - 1) * size) + idx
                return ({key, url, isEmpty})
            })
    }

    const onDelete = (key) => () => {
        delete bookmarks[key]
        setBookmarks(bookmarks.filter(bm => bm))
    }

    const onBack = () => setNumber(num => num > 1 ? num - 1 : num)

    const onNext = () => setNumber(num => num < Math.ceil(bookmarks.length / size) ? num + 1 : num)

    return <>
        {getBookmarks().map(({key, url, isEmpty}) => <>
                <div className="grid grid-cols-6 gap-4 bg-gray-200 rounded p-2 m-3">
                    <div className="col-span-5 ...">
                        <div className="bg-white break-all rounded p-2">
                            {url}
                        </div>
                    </div>
                    <div className="col-span-1 ...">
                        {isEmpty ? <button className="bg-red-200 rounded p-2 hover:bg-red-400 h-min" onClick={onDelete(key)} >
                            x
                        </button> : null}
                    </div>
                </div>
            </>
        )}
        <Pagination size={Math.ceil(bookmarks.length || 1 / size)} number={number} onBack={onBack} onNext={onNext} />
    </>
  }