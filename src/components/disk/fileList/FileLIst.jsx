import React from 'react';
import "./filelist.css";
import {useSelector} from "react-redux";
import File from "./file/File";

const FileList = () => {
	const files = useSelector(state => state.files.files).map(file => <File key={file._id} file={file} />)

	// const files = [
	// 	{_id: 1, name: 'file', type: 'dir', size: '5mb', date: '09/01/2023'},
	// 	{_id: 1, name: 'file', type: 'dir', size: '5mb', date: '09/01/2023'},
	// 	{_id: 1, name: 'file', type: 'file', size: '5mb', date: '09/01/2023'},
	// 	{_id: 1, name: 'file', type: 'dir', size: '5mb', date: '09/01/2023'},
	// ]. map(file => <File />)

	return (
		<div className="filelist">
			<div className="filelist__header">
				<div className="filelist__name">Название</div>
				<div className="filelist__date">Дата</div>
				<div className="filelist__size">Размер</div>
			</div>
			{files}
		</div>
	);
};

export default FileList;
