import { getEntryById } from '@/utils/contentful';
import * as React from 'react';
import ReactMarkdown from 'react-markdown'

interface IBlogDetailProps {
    params: { id: string }
}

const BlogDetail: React.FunctionComponent<IBlogDetailProps> = async ({ params }) => {
    const blogDetailList = await getEntryById(params.id);
    console.log(blogDetailList);

    const printBlog = () => {
        if (blogDetailList?.length) {
            return blogDetailList.map((val: any) => {
                const { sys, fields } = val;
                console.log("IMAGE MEDIA", fields.image.fields.file);

                return (
                    <div key={sys.id} className='p-9 flex flex-col items-center overflow-hidden'>
                        <div>
                            <h2 className='font-bold max-w-[43rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.6rem] sm:mb-2 md:mb-3 lg:mb-5'>{fields.title}</h2>
                            <h3 className='font-semibold text-slate-600 sm:text-base md:text-xl lg:text-xl sm:mb-2 lg:mb-5'>{fields.section}</h3>
                        </div>
                        <img src={fields.image.fields.file.url} alt={fields.image.fields.title} className='object-cover rounded-2xl my-5 sm:w-[20rem] md:w-[31.5rem] lg:w-[43rem] sm:h-[12rem] md:h-[18.5rem] lg:h-[25rem]'/>
                        <ReactMarkdown className='prose max-w-[43rem] sm:text-sm md:text-base lg:text-base sm:py-2 md:py-3 lg:py-5'>{fields.description}</ReactMarkdown>
                    </div>
                );
            });
        };
    };

    return (
        <div>
            {printBlog()}
        </div>
    );
};

export default BlogDetail;
