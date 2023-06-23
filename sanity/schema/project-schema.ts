 const project  = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title:'Slug',
            type:'slug',
            options: {
                source: 'name',
                maxLength:200,
                slugify: (input: any) => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .slice(0,200)
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true},
            fields: [
               {
                name:'alt',
                tiele: 'Alt',
                type: 'string'
               }
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of:[{type: 'block'}]
        }
    ]
}
export default project
