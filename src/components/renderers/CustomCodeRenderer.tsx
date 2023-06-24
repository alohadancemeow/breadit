"use client";

function CustomCodeRenderer({ data }: any) {
  const code = data.code;
  return (
    <pre className="p-4 bg-gray-800 rounded-md">
      <code className="text-sm text-gray-100">{code}</code>
    </pre>
  );
}

export default CustomCodeRenderer;
