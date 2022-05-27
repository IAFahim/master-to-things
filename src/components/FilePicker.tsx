import React, {useState} from "react";
import "../css/FilePicker.scss";

const FilePicker = () => {
    const [text, setText] = useState("");
    const [, setIsHovering] = useState(false);

    const filePrint = (file: any) => {
        let reader = new FileReader();
        reader.onload = (ev: ProgressEvent<FileReader>) => {
            setText(String(ev.target!.result));
        }
        reader.readAsText(file);
    }

    const DragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', event.currentTarget.id);
    }

    const enableDropping = (ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault();
    }

    const inputViaButtonClickHandler = (ev: any) => {
        filePrint(ev.target.files[0]);
    }

    const dropHandler = (ev: React.DragEvent<HTMLDivElement>) => {
        filePrint(ev.dataTransfer.files[0]);
        setIsHovering(false)
    }

    return (
        <div className="filePicker">
            <input className={"filePicker"} type={"file"}
                   onDragStart={DragStartHandler}
                   onDragOver={enableDropping}
                   onChange={inputViaButtonClickHandler}
                   onDrop={dropHandler}/>
            <p>{text}</p>
        </div>
    );
}

export default FilePicker;