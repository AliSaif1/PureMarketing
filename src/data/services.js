import {
    ComputerDesktopIcon,
    ChartBarIcon,
    MagnifyingGlassIcon,
    ChatBubbleLeftRightIcon,
    PaintBrushIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/outline";

const services = [
    {
        name: "Web Development",
        description: "Custom, responsive websites designed to convert visitors into customers with optimal performance.",
        icon: ComputerDesktopIcon,
        href: "/services/web-development",
    },
    {
        name: "Digital Marketing",
        description: "Data-driven campaigns across all digital channels to maximize your reach and conversions.",
        icon: ChartBarIcon,
        href: "/services/digital-marketing",
    },
    {
        name: "SEO Optimization",
        description: "Comprehensive strategies to improve your search rankings and organic traffic growth.",
        icon: MagnifyingGlassIcon,
        href: "/services/seo",
    },
    {
        name: "Social Media Management",
        description: "Strategic content creation and community engagement across all major platforms.",
        icon: ChatBubbleLeftRightIcon,
        href: "/services/social-media",
    },
    {
        name: "Brand Strategy",
        description: "Developing cohesive brand identities that resonate with your target audience.",
        icon: PaintBrushIcon,
        href: "/services/branding",
    },
    {
        name: "Content Creation",
        description: "Compelling, SEO-optimized content that tells your brand story effectively.",
        icon: PencilSquareIcon,
        href: "/services/content",
    },
];

export default services;