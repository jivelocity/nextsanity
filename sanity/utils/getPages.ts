import { Page } from "@/types/Page";
import { client } from "../lib/client";
import { groq } from "next-sanity";

export async function getPages() : Promise<Page[]> {
    return client.fetch(
        groq`*[_type == 'page']{
            _id,
            _createdAt,
            title,
            'slug': slug.current
        }`
    )
}
