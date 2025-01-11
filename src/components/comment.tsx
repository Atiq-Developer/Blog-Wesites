"use client";
import React, { useState } from "react";

const CommentBox: React.FC = () => {
  // Explicitly type the state as an array of strings
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]); // Now TypeScript knows comments is string[]
      setComment("");
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-orange-700 dark:text-light">
        Leave a Comment!
      </h1>
      {/* Input Area */}
      <div className="flex flex-col gap-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Add Comment
        </button>
      </div>
      {/* Comments Display */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Comments
        </h2>
        <div className="flex flex-col gap-4">
          {comments.length > 0 ? (
            comments.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
              >
                {item}
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
