"use client";

import CustomCodeRenderer from "@/components/renderers/CustomCodeRenderer";
import CustomImageRenderer from "@/components/renderers/CustomImageRenderer";
import { FC, Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

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

const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
  return (
    <Suspense
      fallback={<Loader2 className="w-5 h-5 animate-spin text-zinc-500" />}
    >
      <Output
        style={style}
        className="text-sm"
        renderers={renderers}
        data={content}
      />
    </Suspense>
  );
};

export default EditorOutput;
