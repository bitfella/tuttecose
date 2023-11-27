const ProgressBar = ({
  completed,
  total,
}: {
  completed: number;
  total: number;
}): JSX.Element => {
  const percent = Math.round((completed * 100) / total) || 0;

  return (
    <div
      aria-hidden='true'
      className={`
        fixed
        top-0
        left-0
        right-0
        z-10
        bg-white
        text-gray-500
        text-sm
      `}
    >
      <span
        className='flex h-3 bg-black transition-all ease-in-out'
        style={{ width: `${percent}%` }}
      ></span>
      <span className='inline-flex p-4'>
        completed: {percent}% ({completed}/{total})
      </span>
    </div>
  );
};

export default ProgressBar;
