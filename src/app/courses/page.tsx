'use client';
import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/app/components/ui/3d-card';
import techBlogs from '../data/music_courses.json';
import Link from 'next/link';

function Page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-12 text-white">
        Tech Blogs ({techBlogs.blogs.length})
      </h1>

      <div className="flex flex-wrap justify-center">
        {techBlogs.blogs.map((blog, index) => (
          <CardContainer key={blog.id || index} className="inter-var m-4">
            <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto p-6 rounded-xl border transition-all duration-300 border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]">

              {/* Title */}
              <CardItem translateZ="50" className="text-2xl font-semibold text-white mb-2 tracking-tight">
                {blog.title}
              </CardItem>

              {/* Author & Slug */}
              <CardItem as="p" translateZ="40" className="text-sm text-cyan-400 mb-1">
                By {blog.author} — <span className="text-neutral-400">{blog.slug}</span>
              </CardItem>

              {/* Description */}
              <CardItem as="p" translateZ="60" className="text-sm text-neutral-300 max-w-sm leading-relaxed mb-4">
                {blog.description}
              </CardItem>

              {/* Image */}
              <CardItem translateZ="100" className="w-full">
                <Image
                  src={blog.image}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl transition duration-300 group-hover/card:shadow-lg"
                  alt={blog.title}
                />
              </CardItem>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-8">
                <Link target='_blank' href={`https://bitgladiator.hashnode.dev/${blog.slug}`}>
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-lg text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read More →
                  </CardItem>
                </Link>
                {blog.isFeatured && (
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold shadow-md hover:scale-105 transition-transform">
                    Featured
                  </CardItem>
                )}
              </div>

            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Page;
