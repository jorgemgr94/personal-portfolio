export default function IconRounded ({ icon }: { icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center mr-4 h-12 w-12 rounded-full bg-gray-700 hover:bg-gray-500 text-white">
      {icon}
    </span>
  );
}
