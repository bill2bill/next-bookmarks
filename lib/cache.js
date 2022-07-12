const checkCache = (window) => 'caches' in window

const cacheGet = async () => {
    const name = process.env.CACHE_NAME
    return caches.open(name)
        .then(cache => {
            return cache.match(name)
        })
        .then(resp => resp.json())
}

const cacheUpdate = async (bookmarks) => {
    const name = process.env.CACHE_NAME
    return caches.open(name)
        .then(cache => {
            return cache.put(`/${name}`, new Response(JSON.stringify(bookmarks)));
        })
}

export {checkCache, cacheGet, cacheUpdate}