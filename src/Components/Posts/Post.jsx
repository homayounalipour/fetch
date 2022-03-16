import React from "react";
import {useFetch} from "../Hooks/useFetch";

export function Posts() {
    const {data: posts} = useFetch({
        url: "https://jsonplaceholder.typicode.com/posts",
    });

    return (
        <>
            {posts.map((item) => {
                return <div>{item.id}</div>;
            })}
        </>
    );
}
