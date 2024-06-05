import { useCountStore } from '../stores/useCountStore';

const Actions = () => {
	const { mode, increment, decrement, setMode } = useCountStore((s) => ({
		mode: s.mode,
		increment: s.increment,
		decrement: s.decrement,
		setMode: s.setMode,
	}));

	return (
		<div >
			<button className="btn w-40" onClick={increment}>			
				Increment
			</button>

			<button className="btn w-40" onClick={decrement}>				
				Decrement
			</button>

			<div className="dropdown">			
					{mode}			
				<ul tabIndex={0} >
					<li>
						<a onClick={() => setMode('Sync')}>Sync</a>
					</li>
					<li>
						<a onClick={() => setMode('Not Sync')}>Not sync</a>
					</li>
				</ul>
			</div>

			<button className="btn btn-outline w-40" onClick={() => window.open('.', '_blank')}>
				Open in new window
			</button>

			{mode === 'Not Sync' && (
				<div className="toast">
					<div className="alert alert-info">
						<span>This sync mode won't work in this example.</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Actions;
