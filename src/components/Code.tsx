import { useCountStore } from '../stores/useCountStore';

const Code = () => {
	const { count, mode, increment, decrement, setMode } = useCountStore();
	return (
		<>
			<h1>count:{count}</h1>
			<h1>mode:{mode}</h1>

			<button onClick={increment}>Increment</button>

			<button onClick={decrement}>Decrement</button>

			<button onClick={() => setMode('Sync')}>Sync</button>

			<button onClick={() => setMode('Not Sync')}>Not sync</button>

			<button onClick={() => window.open('.', '_blank')}>Open in new window</button>
		</>
	);
};

export default Code;
