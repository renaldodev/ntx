import { Controller, Control } from "react-hook-form";
import { Form, FormControlProps } from "react-bootstrap";

type Props = FormControlProps & {
	label?: string;
	name: string;
	error: string;
	control: Control<any, any, any>;
};

export function GrupoTextField({
	name,
	label,
	control,
	error,
	...rest
}: Props) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<>
					<Form.Label style={{ position: "absolute", top: "-23px" }}>
						{label}
					</Form.Label>
					<Form.Control {...field} placeholder={label} {...rest} />{" "}
					{error && (
						<span
							style={{
								color: "red",
							}}
						>
							{error}
						</span>
					)}
				</>
			)}
		/>
	);
}
