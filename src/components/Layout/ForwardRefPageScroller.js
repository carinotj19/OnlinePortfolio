import React, { forwardRef, useImperativeHandle } from 'react';
import ReactPageScroller from 'react-page-scroller';

// Expose an imperative API that triggers a page change via callbacks/props.
// This avoids relying on internal refs of react-page-scroller.
const ForwardRefPageScroller = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    goToPage: (pageNumber) => {
      if (typeof props.onBeforePageScroll === 'function') {
        props.onBeforePageScroll(pageNumber);
      }
    }
  }), [props]);

  return <ReactPageScroller {...props} />;
});

export default ForwardRefPageScroller; 
