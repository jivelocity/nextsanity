import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Project } from "@/types/Project";

export async function getProject(slug:string): Promise<Project> {
    return client.fetch(
        groq`*[_type == 'project' && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset->url,
            url,
            content
        }`,
        {slug}
    )
}
