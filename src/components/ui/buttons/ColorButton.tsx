type ColorButtonProps = {
	onClick?: () => void;
	children: React.ReactNode;
};

export default function ColorButton({ onClick, children }: ColorButtonProps) {
	return (
		<div className="rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]">
			<button
				className="bg-white p-[0.3rem] rounded-sm text-base hover:opacity-90 transition-opacity"
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
}
