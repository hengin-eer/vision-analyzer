import Camera from "@/components/Camera";

export default function Home() {
	return (
		<main className="px-6 lg:px-10 py-10">
			<p className="text-xl">📸 hello, vision analyzer!</p>
			<section>
				<Camera />
			</section>
		</main>
	);
}
