"use client";

import CustomCodeRenderer from "@/components/renderers/CustomCodeRenderer";
import CustomImageRenderer from "@/components/renderers/CustomImageRenderer";
import { FC } from "react";
import dynamic from "next/dynamic";

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  { ssr: false }
);

interface EditorOutputProps {
  content: any;
}

const renderers = {
  image: CustomImageRenderer,
  code: CustomCodeRenderer,
};

const style = {
  paragraph: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
};

const data = {
  time: 1564767102436,
  blocks: [
    {
      type: "header",
      data: {
        level: 4,
        text: "Editor.js React Renderer",
      },
    },
    {
      type: "image",
      data: {
        file: {
          url: "/",
        },
        caption: "Test Caption",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium veritatis dolorum cum amet! Ipsa ullam nisi, dolor explicabo ut nobis repudiandae saepe illo error facilis consectetur, quisquam assumenda dolorum.",
      },
    },
  ],
  version: "2.27.0",
};

const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
  console.log("content", content);
  console.log("data", data);

  return (
    <Output
      style={style}
      className="text-sm"
      renderers={renderers}
      // data={content}
    />
  );
};

export default EditorOutput;
