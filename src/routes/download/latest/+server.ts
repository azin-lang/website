import { redirect } from "@sveltejs/kit";

export function GET() {
	throw redirect(302, "/download/0.2.1");
}