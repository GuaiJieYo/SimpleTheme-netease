export const Button: React.FC<
	React.PropsWithChildren<React.HTMLAttributes<HTMLAnchorElement>>
> = (props) => {
	const { children, className, ...other } = props;
	const wrapperClass = [...((document.querySelector('.cmd-button'))!.classList as unknown as string[])].find(v => v.startsWith('ButtonWrapper_'))
	return (
		<a className={`${wrapperClass} cmd-button cmd-button-outlineSec cmd-button-size-m cmd-button-outline-sec cmd-button-outline-dark button-item
		 ${className || ""}`} {...other}>
			{children}
		</a>
	);
};
