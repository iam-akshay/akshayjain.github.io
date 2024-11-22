'use client';

import React, { useEffect, useState } from 'react';
import { Heading } from '../ui/Heading';
import Tag from '../ui/Tag';

interface Blog {
  title: string;
  link: string;
  contentSnippet: string;
  tags: string[];
}

const Skills: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const feedUrl = 'https://medium.com/feed/@iam-akshay';
      try {
        const response = await fetch(feedUrl);
        const text = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');

        const items = xmlDoc.getElementsByTagName('item');
        const blogsData: Blog[] = Array.from(items).map((item: any) => {
          const title = item.getElementsByTagName('title')[0]?.textContent || 'No title';
          const link = item.getElementsByTagName('link')[0]?.textContent || '#';
          const contentSnippet = item.getElementsByTagName('description')[0]?.textContent || 'No description';
          const tags = Array.from(item.getElementsByTagName('category'))
            .map((category: any) => category.textContent)
            .filter((tag: string) => tag !== undefined);

          return {
            title,
            link,
            contentSnippet,
            tags,
          };
        });

        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching or parsing Medium RSS feed', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col p-8 px-8 md:px-32 h-full items-center gap-12">
      <Heading>My Blogs</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {blogs.map((blog, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                {blog.title}
              </a>
            </h3>
            <p className="text-sm text-gray-600 mb-4">{blog.contentSnippet}</p>
            <div className="flex gap-2">
              {blog.tags.map((tag, idx) => (
                <Tag theme="dark" key={idx}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
