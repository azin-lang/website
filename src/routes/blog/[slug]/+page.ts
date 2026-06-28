import { error } from '@sveltejs/kit';
import { getBlogPost } from '$lib/blog';

export function load({ params }) {
	const post = getBlogPost(params.slug);

	if (!post) {
		throw error(404, 'Blog not found');
	}

	return {
		post
	};
}
