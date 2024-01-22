import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import styled from "@emotion/styled";
import { io } from "socket.io-client";

const Component = styled.div`
  background: #f5f5f5;
`;

let toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
];

const Texteditor = () => {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();

  useEffect(() => {
    const editor = new Quill("#container", {
      theme: "snow",
      modules: { toolbar: toolbarOptions },
    });
    setQuill(editor);
  }, []);

  useEffect(() => {
    const socketServer = io("http://localhost:8000");
    setSocket(socketServer);
    return () => {
      socketServer.disconnect();
    };
  }, []);

  return (
    <Component>
      <Box className="container" id="container"></Box>
    </Component>
  );
};

export default Texteditor;
