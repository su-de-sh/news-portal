import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-gray-100 p-4">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
                <li><a href="/category/politics" className="text-blue-600 hover:underline">Politics</a></li>
                <li><a href="/category/sports" className="text-blue-600 hover:underline">Sports</a></li>
                <li><a href="/category/technology" className="text-blue-600 hover:underline">Technology</a></li>
                <li><a href="/category/entertainment" className="text-blue-600 hover:underline">Entertainment</a></li>
                <li><a href="/category/business" className="text-blue-600 hover:underline">Business</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;