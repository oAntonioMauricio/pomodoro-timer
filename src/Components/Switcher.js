import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../Hooks/useDarkSide";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(checked ? "dark" : "light");
		setDarkSide(!darkSide);
	};

	//click automatically on the svg
	useEffect(() => {
		console.log("theme changed!");
		setDarkSide(colorTheme === "light" ? true : false)
    }, [colorTheme, darkSide]);

	return (
		<>
			<DarkModeSwitch
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</>
	);
}
