import React, { forwardRef, useEffect, useRef } from "react";
import useMergedRef from "utils/useMergedRef";

export type SearchListboxProps = {
  loadMoreAvailable?: boolean;
  loadMore: () => void;
};

const SearchListbox = forwardRef<HTMLElement, SearchListboxProps>(
  ({ loadMore, loadMoreAvailable, ...props }, _ref) => {
    const ref = useRef<HTMLElement>(null);

    const mergedRef = useMergedRef(ref, _ref);

    useEffect(() => {
      if (loadMoreAvailable) {
        const list = ref.current;

        if (list) {
          const handleScroll = () => {
            if (
              list.children.length &&
              list.scrollTop + list.clientHeight >
                list.scrollHeight -
                  (list.scrollHeight / list.children.length) * 4
            ) {
              loadMore();
            }
          };

          list.addEventListener("scroll", handleScroll);

          return () => list.removeEventListener("scroll", handleScroll);
        }
      }
    }, [loadMoreAvailable]);

    return <ul {...props} ref={mergedRef} />;
  }
);

export default SearchListbox;
