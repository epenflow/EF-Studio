import React from 'react';
import YouTube from 'react-youtube';
interface Props {
	videoId: string;
}
const TerminalVideo: React.FC<Props> = ({ videoId }) => {
	return (
		<YouTube
			videoId={videoId}
			className='flex items-center justify-center w-full h-full'
			iframeClassName='w-full h-full'
		/>
	);
};
export default TerminalVideo;
