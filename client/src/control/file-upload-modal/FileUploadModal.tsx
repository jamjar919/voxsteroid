import React, {ChangeEvent} from "react";
import {Modal, ModalProps} from "../../framework/modal/Modal";
import {useControls} from "../control-context/ControlContext";

type FileEventTarget = HTMLInputElement & { files: FileList };

const ASTEROID_FILE_DIR = './asteroids/'

const ASTEROID_FILE_LIST = [
    '216kleopatra.stl',
];

const FileUploadModal: React.FC<ModalProps> = (props) => {
    const {
        file,
        setFile
    } = useControls();

    const handleLoadFileChange = (e: ChangeEvent<FileEventTarget>) => {
        setFile(
            window.URL.createObjectURL(e.target.files[0])
        );
    }

    const handleLoadExample = (e: ChangeEvent<HTMLSelectElement>) => {
        setFile(`${ASTEROID_FILE_DIR}${e.target.value}`);
    }

    console.log(file);

    let selectedFile = "custom-file";
    if (file && ASTEROID_FILE_LIST.includes(file)) {
        selectedFile = file;
    }

    return (
        <Modal {...props}>
            <div>
                Choose your own file:
                <input type="file" onChange={handleLoadFileChange} />
            </div>
            <p>
                Or load an example:
                <select onChange={handleLoadExample} value={selectedFile}>
                    <option value="custom-file">Select file</option>
                    {
                        ASTEROID_FILE_LIST.map((name) =>
                            <option value={name}>{name}</option>
                        )
                    }
                </select>
            </p>
        </Modal>
    );
}

export { FileUploadModal };
