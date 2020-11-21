function printPersons() {
	let row = '';

	persons.map((person) => {
		row += getTemplate(person);
	});

	teamRow.innerHTML = row;
}

function getTemplate(person) {
	return `<div class="team__person person${person.id}" style='background-image: url(${person.photo})'>
    <div class="team__letter">
      <div class="team__triangle"></div>
      <div class="team__rectangle">
        <div class="rectangle-title">
          ${person.name} <em class="title-ui">/ ${person.profession} </em>
        </div>
        <div class="rectangle-text">
          ${person.about}
        </div>
        <div class="rectangle-icons">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-globe" aria-hidden="true"></i>
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>`;
}

printPersons();
