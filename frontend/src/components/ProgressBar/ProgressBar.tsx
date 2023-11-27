const ProgressBar = ({
  completed,
  total,
}: {
  completed: number;
  total: number;
}): JSX.Element | null => {
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
        dark:bg-black
        text-gray-400
        text-sm
      `}
    >
      <span
        className={`
          flex h-3
          bg-black
          dark:bg-white
          transition-all
          ease-in-out
        `}
        style={{ width: `${percent}%` }}
        data-testid='ProgressBar-Gfx'
      />
      <span className='inline-flex p-4' data-testid='ProgressBar-Text'>
        completed: {percent}% ({completed}/{total})
      </span>
    </div>
  );
};

export default ProgressBar;
