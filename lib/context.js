import { createContext } from "react";

const BookmarkContext = createContext({
  bookmarks: [],
  setBookmarks: (bookmarks) => {}
});

export default BookmarkContext;