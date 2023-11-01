/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/styles/App.css";
import Form from "./Components/form";

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<>
    <Form></Form>
		</>
	);
}
