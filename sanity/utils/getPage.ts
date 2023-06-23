import { Page } from "@/types/Page";
import { client } from "../lib/client";
import { groq } from "next-sanity";

export async function getPage(slug:string) : Promise<Page> {
    return client.fetch(
        groq`*[_type == 'page' && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            content,
            'slug': slug.current
        }`,
        {slug}
    )
}
