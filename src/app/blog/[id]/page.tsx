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
                    <div key={sys.id} className='p-9 flex flex-col items-center'>
                        <div>
                            <h2 className='text-[2.2rem] font-bold mb-5 max-w-[43rem]'>{fields.title}</h2>
                            <h3 className='text-xl font-semibold mb-5 text-slate-600'>{fields.section}</h3>
                        </div>
                        <img src={fields.image.fields.file.url} alt={fields.image.fields.title} className='w-[43rem] h-[25rem] object-cover rounded-2xl my-5'/>
                        <ReactMarkdown className=' py-5 max-w-[43rem]'>{fields.description}</ReactMarkdown>
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
