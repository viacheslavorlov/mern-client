import React from 'react';
import "./file.css";
import dirLogo from "../../../../assets/icons8-cd-material-filled-32.png";
import fileLogo from "../../../../assets/favicon.ico";

const File = ({file}) => {
	return (
		<div className="file">
			<img className="file__img" src={file.type === 'dir' ? dirLogo : fileLogo} alt="файл" />
			<div className="file__name">{file.name}</div>
			<div className="file__date">{file.date.slice(0, 10)}</div>
			<div className="file__size">{file.size}</div>

		</div>
	);
};

export default File;
