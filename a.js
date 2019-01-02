const personsTable = $('#persons');

const getPersons = async () => {
  const config = { url: '/data.json', dataType: 'json' };
  const { Persons } = await $.ajax(config);
  return Persons;
};

const persons = await getPersons();

persons.forEach(person => {
  const tr = document.createElement('tr');
  const $tr = $(tr);
  personsTable.append(tr);
  $tr.append(<td> ${person.FirstName} </td>);
});
