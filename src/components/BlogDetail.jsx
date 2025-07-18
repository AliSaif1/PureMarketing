import { blogPosts } from '../data/blogData';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
    const { id } = useParams();
    const post = blogPosts.find(post => post.id === parseInt(id));

    if (!post) {
        return (
            <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary-700 mb-4">Post Not Found</h1>
                    <p className="text-secondary-600">The blog post you're looking for doesn't exist.</p>
                    <a
                        href="/blogs"
                        className="inline-block mt-6 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-300"
                    >
                        Back to Blog
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-80 object-cover"
                />

                <div className="p-6 md:p-8">
                    <div className="flex items-center text-sm text-secondary-400 mb-4">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>By {post.author}</span>
                    </div>

                    <h1 className="text-3xl font-bold text-primary-700 mb-6">{post.title}</h1>

                    <div
                        className="prose max-w-none text-secondary-700"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-8 pt-6 border-t border-secondary-100">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-block bg-accent-100 text-accent-800 text-sm px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <a
                            href="/blogs"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                            ← Back to All Posts
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}