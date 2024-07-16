import CardBlog from '@/components/core/CardBlog';
import { getEntryBlogPost } from '@/utils/contentful';
import * as React from 'react';

interface IBlogProps {
}

const Blog: React.FunctionComponent<IBlogProps> = async(props) => {
    const blogsList = await getEntryBlogPost();
    console.log(blogsList);
    
    const printBlog=() => {
        if (blogsList?.length) {
            return (
                <div className='flex justify-evenly'>
                    <div className='grid grid-cols-3'>
                        {blogsList?.map((value:any) => {
                            const {sys, fields} = value;

                            return (
                                <div key={sys.id} className='w-full p-4'>
                                    <CardBlog
                                        id={sys.id}
                                        title={fields.title}
                                        section={fields.section}
                                        image={fields.image.fields.file.url}
                                        />
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
    
    
    return (
    <div className='flex flex-col items-center'>
        <div className='my-20 mx-40 relative left-[-11rem]'>
            <h1 className='text-5xl text-[#12181f] font-bold'>What's On Gojek</h1>
            <p className='my-5 text-xl'>Our stories, latest updates, and exclusive promos. Find anything you want to know about us.</p>
        </div>
        <div>
            <h1>{printBlog()}</h1>
        </div>
    </div>
  );
};

export default Blog;
