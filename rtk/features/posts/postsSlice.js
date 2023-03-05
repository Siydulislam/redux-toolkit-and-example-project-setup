const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

// initial state
const initialState = {
    loading: false,
    posts: [],
    error: ""
};

// create async thunk
const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await response.json();

    return posts;
});

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.posts = []
            });
    }
});

module.exports = postsSlice.reducer;
module.exports.fetchPosts = fetchPosts;

