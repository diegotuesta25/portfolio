import Contacts from "../ui/home/contacts";
import Title from "../ui/title";

export default function Page() {
	return (
		<div className="flex flex-col w-full gap-14 pb-4 md:gap-28 md:pb-50">
			<Title title="contacts" />
			<Contacts withTitle={false} />
		</div>
	);
}
