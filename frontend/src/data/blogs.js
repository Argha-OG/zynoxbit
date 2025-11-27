/**
 * Array containing blog posts.
 * Content is stored as an HTML string or Markdown.
 * @type {Array<Object>}
 */
export const BLOG_POSTS = [
    {
        id: "blog_01",
        slug: "future-of-web-development",
        title: "The Future of Web Development: Glassmorphism and Beyond",
        excerpt: "Explore how design trends like Glassmorphism are shaping the next generation of web interfaces.",
        date: "2023-10-27",
        author: "ZynoxBit Team",
        content: `
      <p>Web design is constantly evolving, and one of the most exciting trends to emerge in recent years is Glassmorphism. This design style, characterized by transparency, background blur, and vivid colors, creates a sense of depth and hierarchy that is both visually stunning and functional.</p>
      <h2>What is Glassmorphism?</h2>
      <p>Glassmorphism is a UI design trend that mimics the look of frosted glass. It uses semi-transparent backgrounds with a blur effect to create a sense of depth and separation between elements. This allows the background to shine through, creating a layered and immersive experience.</p>
      <h2>Why is it Popular?</h2>
      <p>Glassmorphism is popular because it looks modern, clean, and sophisticated. It also allows designers to create interfaces that feel lightweight and airy, which is perfect for mobile devices and other small screens.</p>
      <h2>The Future of Web Design</h2>
      <p>As web technologies continue to advance, we can expect to see even more innovative and immersive design trends emerge. Glassmorphism is just the beginning, and we can't wait to see what the future holds.</p>
    `,
        tags: ["Design", "Trends", "Glassmorphism"]
    },
    {
        id: "blog_02",
        slug: "why-spa",
        title: "Why Single Page Applications (SPAs) are the Future",
        excerpt: "Discover the benefits of SPAs and why they are becoming the standard for modern web development.",
        date: "2023-11-15",
        author: "ZynoxBit Team",
        content: `
      <p>Single Page Applications (SPAs) have revolutionized the way we build and interact with web applications. Unlike traditional multi-page websites, SPAs load a single HTML page and dynamically update the content as the user interacts with the app.</p>
      <h2>Benefits of SPAs</h2>
      <ul>
        <li><strong>Faster Load Times:</strong> SPAs only load the necessary resources once, which results in faster load times and a smoother user experience.</li>
        <li><strong>Improved User Experience:</strong> SPAs provide a more app-like experience, with smooth transitions and instant feedback.</li>
        <li><strong>Easier Development:</strong> SPAs are often easier to develop and maintain than traditional multi-page websites, thanks to modern frameworks like React and Vue.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>SPAs are the future of web development, offering a superior user experience and improved performance. If you're building a new web application, you should definitely consider using an SPA architecture.</p>
    `,
        tags: ["Development", "SPA", "React"]
    }
];
