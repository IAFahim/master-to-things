import React from "react";

const FilePicker = () => {
    const handleFile = (event: any) => {
        let reader = new FileReader();
        reader.onload = (event) => {
            console.log(event.target!.result);
        }
        reader.readAsText(event.target.files[0]);
    }
    return (
        <input className={"filePicker"} type={"file"} onChange={handleFile}/>
    );
}

export default FilePicker;