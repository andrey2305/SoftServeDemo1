function speakers(speakers){
	return `
	<div class="speakers-list">
		<ul class="list">
			${speakers.map(speaker => `<li>
				<a href="${speaker.social}" target="_blank" class="speaker">
					<div class="avatar"><img src="${speaker.avatar}" alt="ava"></div>
					<div class="name">
						<span>${speaker.name}</span>
						<span>${speaker.surname}</span>
					</div>
				</a>
			</li>`).join("")}
		</ul>
	</div>`;
}