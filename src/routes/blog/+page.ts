import { getAllBlogPosts } from '$lib/blog';

export function load() {
	return {
		posts: getAllBlogPosts()
	};
}
