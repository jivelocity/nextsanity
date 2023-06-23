import { getProject } from "@/sanity/utils/getProject"
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface Props {
    params: {project : string}
}

export default async function Project({params}:Props) {
    const slug = params.project

    const project = await getProject(slug)

    return(
      <div >
        {/* Image */}
        <Image
                src={project.image}
                alt={project.name}
                width={1920}
                height={1080}
                className="border-2 border-gray-700 rounded-xl"
        />

        <header className="flex mt-10  justify-between items-center">
            <h1
                className="
                text-5xl
                drop-shadow
                mt-2
                font-extrabold
                bg-gradient-to-r
                from-orange-400
                via-red-500
                to-purple-600
                bg-clip-text
                text-transparent"
            >
                {project.name}
            </h1>
            <a className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-400 hover:text-blue-50" href={project.url} title="View Video" target="_blank" rel="noopener noreferrer">
                View Video
            </a>
        </header>

        {/* Content */}
       <div className="text-lg text-gray-700 mt-10">
            <PortableText value={project.content}></PortableText>
       </div>



      </div>
    )
}
