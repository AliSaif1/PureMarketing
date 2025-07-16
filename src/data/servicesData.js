const allServices = [
    {
        name: "Custom Web Development",
        icon: '/web-dev.svg',
        href: "/services/web-development",
    },
    {
        name: "Mobile App Development",
        icon: '/mobile_dev.svg',
        href: "/services/mobile-app-development",
    },
    {
        name: "Google & Meta Advertisement",
        icon: '/ads.svg',
        href: "/services/ads",
    },
    {
        name: "Social Media Management",
        icon: '/social-media.svg',
        href: "/services/social-media",
    },
    {
        name: "WordPress Development",
        icon: '/wp-dev1.svg',
        href: "/services/wordpress-development",
    },
    {
        name: "Website Maintenance & Support",
        icon: '/maintenance.svg',
        href: "/services/maintenance",
    },
    // {
    //     name: "Digital Marketing Strategy",
    //     icon: '/marketing.svg',
    //     href: "/services/digital-marketing",
    // },
    {
        name: "Search Engine Optimization",
        icon: '/seo.svg',
        href: "/services/seo",
    },
    {
        name: "Graphic Designing",
        icon: '/branding.svg',
        href: "/services/branding",
    },
    {
        name: "Content Creation",
        icon: '/content-creation.svg',
        href: "/services/content",
    },

    // Need only one services of social media
    {
        name: "Social Media Posts",
        icon: '/posts2.svg',
        pricing: [
            { price: "$99/month", description: "15 Posts" },
            { price: "$149/month", description: "25 Posts" },
            { price: "$199/month", description: "35 Posts" }
        ]
    },
    {
        name: "Short-Form Videos",
        icon: '/video2.svg',
        pricing: [
            { price: "$99/month", description: "5 Videos" },
            { price: "$190/month", description: "10 Videos" },
            { price: "$250/month", description: "15 Videos" }
        ]
    },
    {
        name: "Email Design",
        icon: '/email.svg',
        pricing: [
            { price: "$149/month", description: "2 Emails" },
            { price: "$299/month", description: "5 Emails" },
            { price: "$499/month", description: "10 Emails" }
        ]
    },
    {
        name: "Blog Post",
        icon: '/blog.svg',
        pricing: [
            { price: "$99/month", description: "2 Blogs" },
            { price: "$190/month", description: "5 Blogs" },
            { price: "$249/month", description: "10 Blogs" }
        ]
    },
    {
        name: "Logo Design",
        icon: '/logo.svg',
        pricing: [
            { price: "$99/month", description: "1 Version" },
            { price: "$190/month", description: "2 Versions" },
        ]
    },
];

export default allServices;