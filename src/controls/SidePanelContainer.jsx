export default function SidePanelContainer({
  children,
  widthPercentage,
  handelClick,
}) {
  return (
    <>
      <div
        className="fixed top-0 right-0 w-full h-screen bg-red-200 opacity-50 z-10"
        onClick={handelClick}
      />
      <div
        className={`fixed h-screen w-${widthPercentage} md:w-1/5 right-0 top-0 z-10 bg-white overflow-auto pb-6`}
      >
        {children}
      </div>
    </>
  );
}
