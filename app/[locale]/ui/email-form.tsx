"use client";
import { useState } from "react";
import Input from "./input";
import Button from "./button";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailForm() {
	const [status, setStatus] = useState<Status>("idle");
	const [errorMsg, setErrorMsg] = useState("");
	const t = useTranslations("contact");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("loading");
		setErrorMsg("");

		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const res = await fetch("/api/contacts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: formData.get("name"),
					email: formData.get("email"),
					message: formData.get("message"),
				}),
			});

			const data = await res.json();

			if (!res.ok) {
				setErrorMsg(data.error || "Something went wrong.");
				setStatus("error");
				return;
			}

			setStatus("success");
			form.reset();
			toast.success(t("success"), {
				style: { background: "#59C26D", color: "white", border: "#59C26D" },
			});
		} catch {
			setErrorMsg("Network error. Please check your connection.");
			setStatus("error");
			toast.error(t("error"), {
				style: { background: "#960019", color: "white", border: "#960019" },
			});
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col gap-4 items-start">
				<h1 className="text-white font-medium text-3xl">{t("subtitle")}</h1>
				<div className="flex gap-4 w-full">
					<Input type="text" placeholder={t("name")} name="name" />
					<Input type="email" placeholder={t("email")} name="email" />
				</div>
				<Input type="text" placeholder={t("title")} name="title" />
				<Input placeholder={t("message")} multiline name="message" />
				<Button variant="primary" isSubmit>
					{t("send")}
				</Button>
			</div>
		</form>
	);
}
