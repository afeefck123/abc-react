import React, { useState,useEffect } from 'react';
import styles from '../styles/Blog.module.css';
import Navbar from './Navbar';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
          document.body.style.overflow = "auto"; // ✅ Allow scrolling
          return () => {
              document.body.style.overflow = "hidden"; // ✅ Lock scrolling when leaving
          };
      }, []);

  const blogPosts = [
    {
      title: "6 Ways a Custom Website Design Benefits Your Business",
      description: "Discover the benefits of custom website design and businesses need a strong online presence to succeed.",
      date: "20 MAR 2023",
      bannerImage: "/images/banner1.jpg",
      content: `
        <h1>6 Ways a Custom Website Design Benefits Your Business</h1>
        
        <img src="/images/blog1.avif" alt="Branding" />
        <h1>Benefits Your Business</h1>
        <p class="blogContent">In today's digital age, businesses need a strong online presence to succeed. However, with millions of websites competing for attention, it can be challenging to stand out from the crowd. That's where custom website design comes in. A custom website is tailored specifically to a business's needs, allowing them to create a unique online presence that sets them apart from its competitors. In this article, we'll explore how custom website design can help your business stand out and establish a strong online presence that will attract more customers and increase profitability.</p>
  
        <h1>Defining Custom Website Design</h1>
        <p class="blogContent">Custom website design involves creating a website tailored to a business's unique needs and goals. This means that the website is designed from scratch rather than using pre-made templates or generic website builders. Custom website design allows businesses to create a website that reflects their brand, messaging, and user experience and can be tailored to the specific needs of their customers.</p>
  
        <h1>3The Importance of Standing Out</h1>
        <p class="blogContent">Standing out is essential for businesses looking to attract and retain customers in a crowded digital marketplace. A custom website design can help businesses create a unique online presence that sets them apart from their competitors. By creating a website that is tailored to their specific needs and goals, businesses can ensure that their website is engaging, memorable, and easy to use.</p>
      `
    },
    {
      title: "7 Life-Changing Tips on How to Find the Perfect Website Design...",
      description: "Choose the right website design and development agency...",
      date: "19 MAR 2023",
  
      content: `
        
        <h1>6 Ways a Custom Website Design Benefits Your Business</h1>

        <img src="/images/blog2.avif" alt="Branding" />

        <h1>Benefits Your Business</h1>
        <p class="blogContent">In today's digital age, businesses need a strong online presence to succeed. However, with millions of websites competing for attention, it can be challenging to stand out from the crowd. That's where custom website design comes in. A custom website is tailored specifically to a business's needs, allowing them to create a unique online presence that sets them apart from its competitors. In this article, we'll explore how custom website design can help your business stand out and establish a strong online presence that will attract more customers and increase profitability.</p>
  
        <h1>Defining Custom Website Design</h1>
        <p class="blogContent">Custom website design involves creating a website tailored to a business's unique needs and goals. This means that the website is designed from scratch rather than using pre-made templates or generic website builders. Custom website design allows businesses to create a website that reflects their brand, messaging, and user experience and can be tailored to the specific needs of their customers.</p>
  
        <h1>3The Importance of Standing Out</h1>
        <p class="blogContent">Standing out is essential for businesses looking to attract and retain customers in a crowded digital marketplace. A custom website design can help businesses create a unique online presence that sets them apart from their competitors. By creating a website that is tailored to their specific needs and goals, businesses can ensure that their website is engaging, memorable, and easy to use.</p>
  
        
      `
    },
    {
      title: "Custom Website vs. Templates: Which is the Better Choice?",
      description: "Understand the difference between custom web design and templates.",
      date: "18 MAR 2023",
      bannerImage: "/images/banner3.jpg",
      content: `
        <h1>6 Ways a Custom Website Design Benefits Your Business</h1>

        <img src="/images/blog4.avif" alt="Branding" />

        <h1>Benefits Your Business</h1>
        <p class="blogContent">In today's digital age, businesses need a strong online presence to succeed. However, with millions of websites competing for attention, it can be challenging to stand out from the crowd. That's where custom website design comes in. A custom website is tailored specifically to a business's needs, allowing them to create a unique online presence that sets them apart from its competitors. In this article, we'll explore how custom website design can help your business stand out and establish a strong online presence that will attract more customers and increase profitability.</p>
  
        <h1>Defining Custom Website Design</h1>
        <p class="blogContent">Custom website design involves creating a website tailored to a business's unique needs and goals. This means that the website is designed from scratch rather than using pre-made templates or generic website builders. Custom website design allows businesses to create a website that reflects their brand, messaging, and user experience and can be tailored to the specific needs of their customers.</p>
  
        <h1>3The Importance of Standing Out</h1>
        <p class="blogContent">Standing out is essential for businesses looking to attract and retain customers in a crowded digital marketplace. A custom website design can help businesses create a unique online presence that sets them apart from their competitors. By creating a website that is tailored to their specific needs and goals, businesses can ensure that their website is engaging, memorable, and easy to use.</p>
      `
    },
    {
      title: "The Do’s and Don’ts of Custom Web Design and Development",
      description: "Learn the best practices for designing custom websites.",
      date: "17 MAR 2023",

      content: `
        <h1>6 Ways a Custom Website Design Benefits Your Business</h1>

        <img src="/images/blog3.avif" alt="Branding" />

        <h1>Benefits Your Business</h1>
        <p class="blogContent">In today's digital age, businesses need a strong online presence to succeed. However, with millions of websites competing for attention, it can be challenging to stand out from the crowd. That's where custom website design comes in. A custom website is tailored specifically to a business's needs, allowing them to create a unique online presence that sets them apart from its competitors. In this article, we'll explore how custom website design can help your business stand out and establish a strong online presence that will attract more customers and increase profitability.</p>
  
        <h1>Defining Custom Website Design</h1>
        <p class="blogContent">Custom website design involves creating a website tailored to a business's unique needs and goals. This means that the website is designed from scratch rather than using pre-made templates or generic website builders. Custom website design allows businesses to create a website that reflects their brand, messaging, and user experience and can be tailored to the specific needs of their customers.</p>
  
        <h1>3The Importance of Standing Out</h1>
        <p class="blogContent">Standing out is essential for businesses looking to attract and retain customers in a crowded digital marketplace. A custom website design can help businesses create a unique online presence that sets them apart from their competitors. By creating a website that is tailored to their specific needs and goals, businesses can ensure that their website is engaging, memorable, and easy to use.</p>
      `
    },
    {
      title: "Custom Website vs. Templates: Which is the Better Choice?",
      description: "Understand the difference between custom web design and templates.",
      date: "18 MAR 2023",
      bannerImage: "/images/banner3.jpg",
      content: `
        <h1>6 Ways a Custom Website Design Benefits Your Business</h1>

        <img src="/images/blog4.avif" alt="Branding" />

        <h1>Benefits Your Business</h1>
        <p class="blogContent">In today's digital age, businesses need a strong online presence to succeed. However, with millions of websites competing for attention, it can be challenging to stand out from the crowd. That's where custom website design comes in. A custom website is tailored specifically to a business's needs, allowing them to create a unique online presence that sets them apart from its competitors. In this article, we'll explore how custom website design can help your business stand out and establish a strong online presence that will attract more customers and increase profitability.</p>
  
        <h1>Defining Custom Website Design</h1>
        <p class="blogContent">Custom website design involves creating a website tailored to a business's unique needs and goals. This means that the website is designed from scratch rather than using pre-made templates or generic website builders. Custom website design allows businesses to create a website that reflects their brand, messaging, and user experience and can be tailored to the specific needs of their customers.</p>
  
        <h1>3The Importance of Standing Out</h1>
        <p class="blogContent">Standing out is essential for businesses looking to attract and retain customers in a crowded digital marketplace. A custom website design can help businesses create a unique online presence that sets them apart from their competitors. By creating a website that is tailored to their specific needs and goals, businesses can ensure that their website is engaging, memorable, and easy to use.</p>
      `
    },
    {
      title: "Custom Website vs. Templates: Which is the Better Choice?",
      description: "Understand the difference between custom web design and templates.",
      date: "18 MAR 2023",
      bannerImage: "/images/banner3.jpg",
      content: `
        <h1>6 Ways a Custom Website Design Benefits Your Business</h1>

        <img src="/images/blog4.avif" alt="Branding" />

        <h1>Benefits Your Business</h1>
        <p class="blogContent">In today's digital age, businesses need a strong online presence to succeed. However, with millions of websites competing for attention, it can be challenging to stand out from the crowd. That's where custom website design comes in. A custom website is tailored specifically to a business's needs, allowing them to create a unique online presence that sets them apart from its competitors. In this article, we'll explore how custom website design can help your business stand out and establish a strong online presence that will attract more customers and increase profitability.</p>
  
        <h1>Defining Custom Website Design</h1>
        <p class="blogContent">Custom website design involves creating a website tailored to a business's unique needs and goals. This means that the website is designed from scratch rather than using pre-made templates or generic website builders. Custom website design allows businesses to create a website that reflects their brand, messaging, and user experience and can be tailored to the specific needs of their customers.</p>
  
        <h1>3The Importance of Standing Out</h1>
        <p class="blogContent">Standing out is essential for businesses looking to attract and retain customers in a crowded digital marketplace. A custom website design can help businesses create a unique online presence that sets them apart from their competitors. By creating a website that is tailored to their specific needs and goals, businesses can ensure that their website is engaging, memorable, and easy to use.</p>
      `
    },
  ];

  return (
    
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <p className={styles.blogSubtitle}>
        A Treasure Trove of Carefully-Crafted Insights from the Milan Marketing Team
      </p>

      {selectedPost ? (
        <div className={styles.blogDetail}>
          <button className={styles.backButton} onClick={() => setSelectedPost(null)}>← Back</button>

          

          {/* Render HTML content dynamically */}
          <div 
            className={styles.blogContent} 
            dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
          />

         
        </div>
      ) : (
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <div key={index} className={styles.blogCard} onClick={() => setSelectedPost(post)}>
              <h2 className={styles.blogCardTitle}>{post.title}</h2>
              <p className={styles.blogCardDescription}>{post.description}</p>
              <span className={styles.blogDate}>{post.date}</span>
              <div className={styles.blogIcon}>↗</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
