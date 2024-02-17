'use client';
import React from 'react';
import { useIsomorphicLayoutEffect } from './hooks/useIsomorphicLayoutEffect';
const Comments = ({ comment }: { comment: string }) => {
	const ref = React.useRef<HTMLSpanElement>(null);
	useIsomorphicLayoutEffect(() => {
		let comments = null;
		let el = null;
		let parent = null;

		if (ref.current) {
			el = ref.current;
			parent = el.parentNode;
			comments = (window || global).document.createComment(
				` ${comment.trim()} `
			);
			try {
				if (parent && parent.contains(el)) {
					parent.replaceChild(comments, el);
				}
			} catch (err) {
				console.info(err);
			}
		}
		return () => {
			if (parent && el && comments) {
				parent.replaceChild(el, comments);
			}
		};
	}, []);

	return (
		<span
			ref={ref}
			style={{ display: 'none' }}
		/>
	);
};
export default Comments;
