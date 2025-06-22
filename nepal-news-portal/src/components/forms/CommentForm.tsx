import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await onSubmit(comment);
            setComment('');
        } catch (err) {
            setError('Failed to submit comment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment..."
                className="p-2 border border-gray-300 rounded-md"
                rows="4"
                required
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
                {loading ? 'Submitting...' : 'Submit Comment'}
            </button>
        </form>
    );
};

export default CommentForm;