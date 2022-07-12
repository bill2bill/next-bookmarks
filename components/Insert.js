import { useContext, useState } from "react";
import BookmarkContext from '../lib/context'

export default function Insert() {
    const {bookmarks, setBookmarks} = useContext(BookmarkContext);  
    const [bookmark, setBookmark] = useState("")
    const [error, setError] = useState(false)
    const errors = {
        url: "You must enter a valid URL",
        empty: "You must enter a URL"
    }
    const re = new RegExp(process.env.URL_REGEX || ".+[\.].{2,3}");

    const isError = (value) => {
        if (!value) {
            setError(errors.empty)
            return true;
        } else if (!re.test(value)) {
            setError(errors.url)
            return true;  
        }
        setError("")
        return false
    }   

    const onInput = (e) => {
        const value = e.target.value
        setBookmark(value)
        isError(value)
    }

    const updateBookmarks = () => {
        if (!isError(bookmark)) {
            setBookmarks([...bookmarks, bookmark])
            setBookmark("")
        }
    }

    return <>
        <div className="mb-3">
            Insert a new bookmark
        </div>
        <div className="grid grid-cols-6 gap-4 bg-gray-200 p-2 mb-2 rounded">
            <div className="col-span-5 ...">
                <input className={`bg-white rounded p-1 ${error ? "border-2 border-red-400" : ""}`} onChange={onInput} value={bookmark} />
            </div>
            <div className="col-span-1 ...">
                <button className="bg-green-200 rounded p-1 hover:bg-green-400" onClick={updateBookmarks}>
                    +
                </button>
            </div>
        </div>
        {error ? <div className="mb-3 text-red-400 text-sm">{error}</div> : null}
    </>
  }