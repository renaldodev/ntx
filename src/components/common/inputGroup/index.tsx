import React from "react";
import { Col, InputGroup } from "react-bootstrap";
import { GrupoTextField } from "../../hook-form";
import { Icon } from "@iconify/react";

interface InputGroupWithLabelProps {
	name: string;
	label: string;
	control: any;
	error: string;
	icon: string;
}

const InputGroupWithLabel: React.FC<InputGroupWithLabelProps> = ({
	name,
	label,
	control,
	error,
	icon,
}) => {
	return (
		<Col md={6} className="mb-3">
			<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1" style={{ maxWidth: "30%" }}>
					<Icon fontSize={16} icon={icon} />
				</InputGroup.Text>
				<GrupoTextField
					name={name}
					label={label}
					control={control}
					error={error}
				/>
			</InputGroup>
		</Col>
	);
};

export default InputGroupWithLabel;
