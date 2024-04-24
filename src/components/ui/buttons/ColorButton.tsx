type ColorButtonProps = {
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
};

export default function ColorButton({
	className,
	children,
	onClick,
}: ColorButtonProps) {
	return (
		<div
			className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem] ${className}`}
		>
			<button
				className="w-full h-full bg-white p-[0.3rem] rounded-sm text-base hover:opacity-90 transition-opacity"
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
}
