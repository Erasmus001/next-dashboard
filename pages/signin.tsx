import Link from 'next/link';
import React, { FormEvent } from 'react';

const Signin = () => {
	return (
		<main className='min-w-screen min-h-screen bg-white flex items-center justify-center flex-col gap-6'>
			{/* Form */}
			<form
				className='xl:min-w-[400px] md:min-w-[420px] sm:min-w-[430px] portrait:w-full portrait:px-16 rounded-md px-7 py-9 flex items-center justify-center flex-col gap-10'
				onSubmit={(event: FormEvent<HTMLFormElement>) => {
					event.preventDefault();
				}}
			>
				{/* Logo */}
				<div className='h-16 w-16 rounded-full bg-gray-200'></div>

				<h3 className='text-2xl font-semibold'>Welcome, Sign in</h3>

				{/* Form */}
				<div className='w-full flex flex-col gap-5'>
					<div className='w-full flex items-start justify-start flex-col gap-2'>
						<label
							htmlFor='username'
							className='text-base text-gray-600 font-semibold'
						>
							Username
						</label>
						<input
							className='w-full px-3 border py-2 rounded-md'
							type='text'
							name='username'
							id='username'
							placeholder='John Doe'
							required
						/>
					</div>
					<div className='w-full flex items-start justify-start flex-col gap-2'>
						<label
							htmlFor='password'
							className='text-base text-gray-600 font-semibold'
						>
							Password
						</label>
						<input
							className='w-full px-3 border py-2 rounded-md'
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							required
						/>
					</div>
					<div className='w-full flex items-start justify-start flex-col gap-2'>
						<button className='p-2.5 bg-blue-500 w-full text-white rounded-md cursor-pointer hover:bg-blue-600 transition-all'>
							Sign in
						</button>
					</div>
				</div>
			</form>

			<div>
				<p>
					Dont have an account?{' '}
					<span>
						<Link href={'/signup'} className='text-blue-600'>
							Create an account
						</Link>
					</span>
				</p>
			</div>
		</main>
	);
};

export default Signin;
