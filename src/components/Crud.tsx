import React, { useEffect, useState } from 'react';

// Interface cho bài viết
interface Post {
  id: number;
  title: string;
  content: string;
}

const CRUD: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Lưu danh sách bài viết
  const [newTitle, setNewTitle] = useState<string>(''); // Tiêu đề bài viết mới
  const [newContent, setNewContent] = useState<string>(''); // Nội dung bài viết mới
  const [editId, setEditId] = useState<number | null>(null); // ID của bài viết cần cập nhật
  const [editTitle, setEditTitle] = useState<string>(''); // Tiêu đề cần cập nhật
  const [editContent, setEditContent] = useState<string>(''); // Nội dung cần cập nhật

  const API_URL = 'https://api-test-web.agiletech.vn/'; // Đường dẫn API

  // Hàm lấy danh sách bài viết
  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Hàm tạo bài viết mới
  const createPost = async () => {
    try {
      const newPost = { title: newTitle, content: newContent };
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      const data = await response.json();
      setPosts([...posts, data]); // Thêm bài viết vào danh sách
      setNewTitle('');
      setNewContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // Hàm cập nhật bài viết
  const updatePost = async (id: number) => {
    try {
      const updatedPost = { title: editTitle, content: editContent };
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });
      const data = await response.json();
      setPosts(posts.map((post) => (post.id === id ? data : post)));
      setEditId(null); // Reset form
      setEditTitle('');
      setEditContent('');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  // Hàm xóa bài viết
  const deletePost = async (id: number) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      setPosts(posts.filter((post) => post.id !== id)); // Xóa bài viết khỏi danh sách
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Gọi fetchPosts khi component render lần đầu
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {/* Form tạo bài viết mới */}
      <div>
        <h2>Create New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button onClick={createPost}>Create Post</button>
      </div>

      {/* Hiển thị danh sách bài viết */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => { setEditId(post.id); setEditTitle(post.title); setEditContent(post.content); }}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Form cập nhật bài viết */}
      {editId !== null && (
        <div>
          <h2>Edit Post</h2>
          <input
            type="text"
            placeholder="New Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            placeholder="New Content"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <button onClick={() => updatePost(editId)}>Update Post</button>
        </div>
      )}
    </div>
  );
};

export default CRUD;
