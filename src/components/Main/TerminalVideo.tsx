import React from 'react';
import YouTube from 'react-youtube';
interface Props {
	videoId: string;
}
const TerminalVideo: React.FC<Props> = ({ videoId }) => {
	return (
		<YouTube
			videoId={videoId}
			className='h-full w-full flex items-center justify-center'
			iframeClassName='w-full h-full'
		/>
	);
};
export default TerminalVideo;
