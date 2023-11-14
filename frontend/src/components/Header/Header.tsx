const Header = (): JSX.Element => {
  return (
    <header className='fixed inset-x-3 h-12 flex items-center bg-white border-b-2 border-black'>
      <h1 className='font-bold text-black text-xl'>TODO<em className='font-light'>List</em></h1>
    </header>
  )
};

export default Header;
