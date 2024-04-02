const NotFound = () => {
	return (
		<section>
			<div className=' text-white'>
				<div className='flex h-screen'>
					<div className='m-auto text-center'>
						<div>
							<img src='/404.svg' alt='404' />
						</div>
						<p className='text-sm md:text-base text-[#8860D0] p-2 mb-4'>
							The page you are looking for {"doesn't"} exist
						</p>
						<a
							href='/'
							className='bg-transparent hover:bg-[#8860D0] text-[#8860D0] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#8860D0] hover:border-transparent'
						>
							Take me home
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
export default NotFound;
