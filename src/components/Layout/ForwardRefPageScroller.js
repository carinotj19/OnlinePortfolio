import React, { forwardRef } from 'react';
import ReactPageScroller from 'react-page-scroller';

const ForwardRefPageScroller = forwardRef((props, ref) => {
  return <ReactPageScroller {...props} containerRef={ref} />;
});

export default ForwardRefPageScroller; 