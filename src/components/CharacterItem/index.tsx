import { Card, Image } from "antd";
import { Character } from "model/api.types";
import React, { memo } from "react";

export const CharacterItem = memo((character: Character) => {
	return (
		<Card cover={<Image src={character.image} />}>
			<div>
				<b>Name: </b>
				{character.name}
			</div>
			<div>
				<b>Gender: </b>
				{character.gender}
			</div>
			<div>
				<b>Status: </b>
				{character.status}
			</div>
			<div>
				<b>Type: </b>
				{character.type}
			</div>
		</Card>
	);
});
