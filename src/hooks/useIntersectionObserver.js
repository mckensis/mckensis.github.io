import { useEffect, useState } from "react";

// Used to animate elements when they are within the viewport
// Threshold is how much of the element must be within viewport
const useIntersectionObserver = (
  elementRef, 
  { 
    threshold = .5,
    root = null, 
    rootMargin = '0%', 
    freezeOnceVisible = false 
  }
) => {
  
	const [entry, setEntry] = useState();

	const frozen = entry?.isIntersecting && freezeOnceVisible;

	const updateEntry = ([entry]) => {
		setEntry(entry);
	};

	useEffect(() => {
		const node = elementRef?.current;
		const hasIOSupport = !!window.IntersectionObserver;

		if (!hasIOSupport || frozen || !node) return;

		const observerParams = { threshold, root, rootMargin };
		const observer = new IntersectionObserver(updateEntry, observerParams);

		observer.observe(node);

		return () => observer.disconnect();
	}, [elementRef, threshold, root, rootMargin, frozen]);

	return entry;
}

export default useIntersectionObserver;