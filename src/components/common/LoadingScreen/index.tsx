const LoadingScreen = () => {
  return (
    <div className="fixed right-[0] top-0 flex h-screen w-[377px] max-w-[377px] items-center justify-center border-l border-border bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-button border-t-transparent" />
        <p className="text-sm text-sub-heading">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
