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
                    <div className='lg:grid lg:grid-cols-3'>
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
    <div className='flex flex-col overflow-hidden'>
        <div className='relative sm:mx-12 md:mx-40 lg:mx-44 sm:my-10 lg:my-20 sm:text-left md:text-center lg:text-left'>
            <h1 className='text-[#12181f] font-bold sm:text-3xl md:text-4xl lg:text-5xl'>What's On Gojek</h1>
            <p className='my-5 sm:text-base md:text-lg lg:text-xl'>Our stories, latest updates, and exclusive promos. Find anything you want to know about us.</p>
        </div>
        <div>
            <h1>{printBlog()}</h1>
        </div>
    </div>
  );
};

export default Blog;
