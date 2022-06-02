import React, {useState} from "react";
import "../css/FilePicker.scss";

const hotHeyParse=(str: string)=>{
    let l = 0;
    let text= new Map();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '\n') {
            let x = str.substring(l + 3, i);
            let end = x.indexOf("::");
            if (end>0) {
                let key = x.substring(0, end);
                let val = x.substring(end + 2);
                text.set(key,val);
            }
            l = i;
        }
    }
    return text;
}

const FilePicker = () => {
    const [text, setText] = useState("");
    const [, setIsHovering] = useState(false);

    const filePrint = (file: any) => {
        let reader = new FileReader();
        reader.onload = (ev: ProgressEvent<FileReader>) => {
            let str = String(ev.target!.result)
            setText(str);

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