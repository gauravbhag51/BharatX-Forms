import React from 'react'

function CreatorSubmitError() {
    return (
		<div className="w-full min-h-screen items-center justify-center flex flex-col gap-8">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-7xl font-semibold ">Oops..!</h1>
				<h1 className="text-2xl"> Something went wrong...</h1>
			</div>
				You Cannot Submit a form that you own
		</div>
	);
}

export default CreatorSubmitError