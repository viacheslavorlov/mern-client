import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFiles} from "../../actions/file";
import FileLIst from "./fileList/FileLIst";
import "./disk.css";

const Disk = () => {
	const dispatch = useDispatch();
	const currentDir = useSelector(state => state.files.currentDir);

	useEffect(() => {
		dispatch(getFiles(currentDir))
	}, [currentDir])
	return (
		<div className="disk">
			<div className={"disk__btns"}>
				<button className="disk__back">Назад</button>
				<button className="disk__create">Создать папку</button>
			</div>
			<FileLIst/>
		</div>
	);
};

export default Disk;
