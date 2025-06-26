import {
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    MagnifyingGlassIcon,
    ChatBubbleLeftRightIcon,
    PaintBrushIcon,
    PencilSquareIcon,
    QrCodeIcon,
    CreditCardIcon,
    MegaphoneIcon,
    WrenchScrewdriverIcon,
    ChartBarIcon
} from "@heroicons/react/24/outline";

const services = [
    {
        name: "Custom Web Development",
        description:
            "Tailored websites built from scratch for performance, scalability, and unique branding. Ideal for businesses seeking fully customized solutions.",
        price: "Starting from $600 to $1500+",
        icon: ComputerDesktopIcon,
        href: "/services/web-development",
    },
    {
        name: "Google & Meta Ads",
        description:
            "Targeted advertising campaigns across Google, Facebook, and Instagram to drive traffic and leads with measurable ROI.",
        price: "Starts at $100 per campaign",
        icon: ChartBarIcon,
        href: "/services/ads",
    },
    {
        name: "Mobile App Development",
        description:
            "Cross-platform mobile apps using React Native or Flutter. Ideal for startups and businesses needing iOS and Android apps.",
        price: "Starting from $1000",
        icon: DevicePhoneMobileIcon,
        href: "/services/mobile-app-development",
    },
    {
        name: "Digital Marketing Strategy",
        description:
            "Holistic marketing strategies that combine ads, email, content, and brand messaging for long-term digital growth.",
        price: "Custom pricing based on scope",
        icon: MegaphoneIcon,
        href: "/services/digital-marketing",
    },
    {
        name: "WordPress Development",
        description:
            "Fast and flexible WordPress websites with theme customization, plugin integration, and CMS setup — perfect for quick turnarounds.",
        price: "Starting from $400",
        icon: ComputerDesktopIcon,
        href: "/services/wordpress-development",
    },
    {
        name: "Print Design",
        description:
            "Professional print assets including flyer designs with QR codes and modern business cards. Delivered with print-ready files.",
        price: "Starting from $30",
        icon: QrCodeIcon,
        href: "/services/print-design",
    },
    {
        name: "Search Engine Optimization",
        description:
            "Boost your search visibility and rankings with on-page SEO, keyword strategies, and regular site maintenance.",
        price: "$75/month (includes optimization & maintenance)",
        icon: MagnifyingGlassIcon,
        href: "/services/seo",
    },
    {
        name: "Social Media Management",
        description:
            "Content creation, scheduling, and engagement strategies across platforms like Facebook, Instagram, LinkedIn, TikTok, and YouTube.",
        price: "$10 per post or monthly packages",
        icon: ChatBubbleLeftRightIcon,
        href: "/services/social-media",
    },
    {
        name: "Website Maintenance",
        description:
            "Ongoing site updates, backups, and performance enhancements. Included with SEO plans or available separately.",
        price: "Included or custom pricing",
        icon: WrenchScrewdriverIcon,
        href: "/services/maintenance",
    },
    {
        name: "Brand Strategy & Identity",
        description:
            "Crafting strong brand identities with cohesive visuals, tone, and positioning tailored to your audience.",
        price: "Custom pricing",
        icon: PaintBrushIcon,
        href: "/services/branding",
    },
    {
        name: "Content Creation",
        description:
            "Engaging, SEO-friendly content for websites, blogs, and campaigns that align with your brand’s voice.",
        price: "Custom pricing",
        icon: PencilSquareIcon,
        href: "/services/content",
    }
];

export default services;