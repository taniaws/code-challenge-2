import { createClient } from "contentful"

export const createContentClient = () => {
    return createClient({
        space: "1tjb571k1ld5",
        accessToken: "Wzxq0Zj8qU2YP1fr81HSQgWXM5h0ibTGHkOoaQFhoYE",
    })
}

const client = createContentClient();

export const getEntryBlogPost = async () => {
    try {
        const response = await client.getEntries({content_type: "blogPostForGojek"});
        const blogs = response.items;

        return blogs;
    } catch (error) {
        console.log(error);
    }
}

export const getEntryById = async (id: string) => {
    try {
        const response = await client.getEntries({"sys.id": id});
        const blogs = response.items;

        return blogs;
    } catch (error) {
        console.log(error);
    }
}