import { useNavigation } from "react-router-dom";

const PageLoader = () => {
  const navigation = useNavigation();

  if (navigation.state === "idle") {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#071525]"
      role="status"
      aria-label="Loading page"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-yellow-400" />
    </div>
  );
};

export default PageLoader;
