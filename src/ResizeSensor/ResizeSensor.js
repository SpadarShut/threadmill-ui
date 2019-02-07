import React from 'react'
import useResizeAware from 'react-resize-aware';

const ResizeSensor = (children) => {
  const [ResizeListener, sizes] = useResizeAware();

  return (
      <div>
        <ResizeListener />
        {children}
      </div>
  );
}

export default ResizeSensor;
