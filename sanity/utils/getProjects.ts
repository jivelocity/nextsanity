import { groq } from "next-sanity"
import { client } from "../lib/client"
import { Project } from "@/types/Project"

export const getProjects = async (): Promise<Project[]> => {
   return client.fetch(
    groq`*[_type == 'project']{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        url,
        content
    }`
   )
}




