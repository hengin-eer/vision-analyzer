"use client";

import type { FC } from "react";

const Camera: FC = () => {
	return (
		<div>
			<p>camera</p>
			<button type="button" onClick={() => alert("Camera is here!")}>
				Click!
			</button>
		</div>
	);
};

export default Camera;
