import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getPosts } from '@/scripts/utils'
import styles from '@/styles/Home.module.css'
import Meta from '@/components/Meta'
import MeetMe from '@/components/MeetMe'
import PostEntry from '@/components/PostEntry'
import { useState } from 'react';

export default function Home({ posts }) {

  return (
    <>
      <Meta title='Yesi Molina - Software Engineer' />
      <MeetMe profilePhoto='yesi-3-blue.jpeg' />
      <Link href='/about'>More about me</Link>


    </>
  );
}

export const getStaticProps = () => {
  const posts = getPosts(1);

  return {
    props: {
      posts,
    },
  };
};
