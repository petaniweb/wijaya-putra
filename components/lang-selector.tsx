import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function LanguageSelector() {
	return (
		<Select defaultValue="indonesia">
			<SelectTrigger className="w-fit">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="indonesia">ID</SelectItem>
					<SelectItem value="english">EN</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
