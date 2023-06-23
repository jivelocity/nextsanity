import { getPage } from "@/sanity/utils/getPage";
import { PortableText } from "@portabletext/react";

interface Props {
    params: {slug:string}
}

export default async function Page ({params}: Props){
    const page = await getPage(params.slug)
    return (
        <div>
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
            >{page.title}</h1>

            <PortableText value={page.content} />
        </div>
    )
}
