const containerTypes: Record<string, string> = {
	"primary": "w-full px-4 sm:p-0 sm:w-4/5 max-w-7xl mx-auto flex flex-col py-12 overflow-visible",
	"hero": "w-4/5 h-full",
	"feature": "py-12",
	"full": "w-full h-full",
	"jumbotron-title": "flex text-primary text-center text-7xl font-medium py-12 flex-grow justify-center items-center",
}

export default function Container({
	type = "primary",
	children,
}: Readonly<{
	type?: string;
	children: React.ReactNode;
}>) {
  return (
	<div className={"flex h-full " + containerTypes[type]}>
		{children}
	</div>
  );
}