"use client";

import Image from "next/image";

function CustomImageRenderer({ data }: any) {
  const src = data.file.url;

  return (
    <div className="relative w-full min-h-[15rem]">
      <Image
        sizes="100%"
        alt="image"
        className="object-contain"
        fill
        src={src}
        priority
      />
    </div>
  );
}

export default CustomImageRenderer;
