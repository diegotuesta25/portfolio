import EmailForm from "../email-form";
import Title from "../title";

type ContactsProps = {
	withTitle?: boolean;
};

export default function Contacts({ withTitle = true }: ContactsProps) {
	return (
		<div className="flex flex-col w-full gap-12">
			{withTitle && (
				<Title title="contacts" subtitle className=" w-10 lg:w-30 xl:w-60" />
			)}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-40 items-center">
				<div className="text-gray">
					I'm currently looking for full-time or internship opportunities in
					front-end development. That said, if you have any questions or just
					want to connect, don't hesitate to reach out.
				</div>
				<EmailForm />
			</div>
		</div>
	);
}
