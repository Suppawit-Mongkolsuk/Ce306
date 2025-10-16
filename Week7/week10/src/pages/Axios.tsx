import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const AxiosAPI: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // state สำหรับเก็บข้อมูล Posts
  const [loading, setLoading] = useState<boolean>(true); // state สำหรับสถานะการโหลด

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // ส่ง GET request ไปยัง API
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data); // ข้อมูลอยู่ใน response.data
      } catch (error: unknown) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id} className="mb-2 p-2 border rounded">
            {post.title}
            {post.body && <p className="text-sm text-gray-600">{post.body}</p>}
            {post.userId && <p className="text-sm text-gray-600">User ID: {post.userId}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosAPI;