  import React, { useRef, useState } from "react";
  import styles from "../styles/Blogs.module.css";

  const Blogs = ({ blogsGridRef, setIsInsideBlogs }) => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const blogPosts = [
      {
        id: 1,
        title: "6 Ways a Custom Website Design Benefits Your Business",
        description:
          "Discover the benefits of custom website design and how it can help your business stand out in today's digital landscape.",
        date: "20 MAR 2023",
        bannerImage: "/images/banner1.jpg",
        content: `
        
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
        id: 2,
        title: "7 Life-Changing Tips on How to Find the Perfect Website...",
        description:
          "Choose the right website design and development agency for your business with these life-changing tips.",
        date: "19 MAR 2023",
        bannerImage: "/images/banner2.jpg",
        content: `

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
        id: 3,
        title: "The Do's and Don'ts of Custom Web Design and...",
        description:
          "Learn the do's and don'ts of custom web design and development to create a functional, visually appealing website.",
        date: "18 MAR 2023",
        bannerImage: "/images/banner3.jpg",
        content: `

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
        id: 4,
        title: "A Comparison Between Custom Website Design vs....",
        description:
          "Want a website that truly reflects your brand? Discover why custom website design is the superior choice.",
        date: "17 MAR 2023",
        bannerImage: "/images/banner4.jpg",
        content: `

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
        id: 5,
        title: "7 Life-Changing Tips on How to Find the Perfect Website...",
        description:
          "Choose the right website design and development agency for your business with these life-changing tips.",
        date: "19 MAR 2023",
        bannerImage: "/images/banner2.jpg",
        content: `<h1>6 Ways a Custom Website Design Benefits Your Business</h1>

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
        id: 6,
        title: "7 Life-Changing Tips on How to Find the Perfect Website...",
        description:
          "Choose the right website design and development agency for your business with these life-changing tips.",
        date: "19 MAR 2023",
        bannerImage: "/images/banner2.jpg",
        content: `

        <img src="/images/blog3.avif" alt="Branding" />

        <h1>Benefits Your Business</h1>
        <p class="blogContent">In today's digital age, businesses need a strong online presence to succeed. However, with millions of websites competing for attention, it can be challenging to stand out from the crowd. That's where custom website design comes in. A custom website is tailored specifically to a business's needs, allowing them to create a unique online presence that sets them apart from its competitors. In this article, we'll explore how custom website design can help your business stand out and establish a strong online presence that will attract more customers and increase profitability.</p>
  
        <h1>Defining Custom Website Design</h1>
        <p class="blogContent">Custom website design involves creating a website tailored to a business's unique needs and goals. This means that the website is designed from scratch rather than using pre-made templates or generic website builders. Custom website design allows businesses to create a website that reflects their brand, messaging, and user experience and can be tailored to the specific needs of their customers.</p>
  
        <h1>3The Importance of Standing Out</h1>
        <p class="blogContent">Standing out is essential for businesses looking to attract and retain customers in a crowded digital marketplace. A custom website design can help businesses create a unique online presence that sets them apart from their competitors. By creating a website that is tailored to their specific needs and goals, businesses can ensure that their website is engaging, memorable, and easy to use.</p>
      `
    },
    ];

    // Scroll event to update active dot
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const totalWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const index = Math.round((scrollLeft / totalWidth) * (blogPosts.length - 1));
        setActiveIndex(index);
      }
    };

    // Scroll to next or previous cards
    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    };

    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };

    return (
      <section
        className={styles.blogsSection}
        ref={blogsGridRef}
        onMouseEnter={() => setIsInsideBlogs(true)}
        onMouseLeave={() => setIsInsideBlogs(false)}
      >
        <div className={styles.container}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            A Treasure Trove of Carefully-Crafted Insights from the Milan Marketing Team
          </p>

          {selectedPost ? (
            <div className={styles.blogDetail}>
              <button className={styles.backButton} onClick={() => setSelectedPost(null)}>
                ← Back
              </button>
              <div className={styles.blogContentWrapper}>
                {/* Blog Post Title (Separate from Main Title) */}
                <h1 className={styles.blogDetailTitle}>{selectedPost.title}</h1>
              <div
                className={styles.blogContent}
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>
            </div>
          ) : (
            <>
              {/* Blog Carousel */}
              <div className={styles.blogsWrapper}>
                <div className={styles.blogsGrid} ref={scrollRef} onScroll={handleScroll}>
                  {blogPosts.map((post) => (
                    <div key={post.id} className={styles.blogCard} onClick={() => setSelectedPost(post)}>
                      <h3 className={styles.blogTitle}>{post.title}</h3>
                      <p className={styles.blogDescription}>{post.description}</p>
                      <span className={styles.blogDate}>{post.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom navigation bar with dots, see all, and arrows */}
              <div className={styles.bottomNav}>
                <div className={styles.navigationControls}>
                  {/* Dots */}
                  <div className={styles.dots}>
                    {blogPosts.map((_, index) => (
                      <span 
                        key={index} 
                        className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                      ></span>
                    ))}
                  </div>
                  
                  {/* See All Link */}
                  <a href="/blog" className={styles.seeAll}>see all</a>
                </div>
                
                {/* Arrow Controls (right side) */}
                <div className={styles.arrowControls}>
                {/* Bottom Right Arrow Button */}
                  <button className={styles.bottomArrow} onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
              </div>
              </div>
            </>
          )}
        </div>
      </section>
    );
  };

  export default Blogs;