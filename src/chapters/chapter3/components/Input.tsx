import React, { forwardRef } from 'react';

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

const Video = forwardRef<HTMLVideoElement, VideoProps>(({ src, ...restProps }, ref) => {
  return <video controls ref={ref} src={src} {...restProps} />;
});

export default Video;

