import { createContext } from "react";

const BookmarkContext = createContext({
  bookmarks: [],
  setBookmarks: (bookmarks) => {console.log("hello")}
});

export default BookmarkContext;