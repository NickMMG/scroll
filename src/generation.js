function generation() {
  const name = ['Никита', 'Игорь', 'Павел', 'Леонид', 'Александр'];
  const lastName = [
    'Керн',
    'Сидоров',
    'Петров',
    'Коляда',
    'Самара',
    'Веселов',
    'Мизинец',
    'Токарев',
    'Юрков',
  ];
  const firstName = [
    'Викторович',
    'Александрович',
    'Артемович',
    'Сергеевич',
    'Давидович',
  ];

  const maxSpeed = [200, 207, 203, 196, 215];

  const time = ['00:59:03', '01:02:13', '00:58:44', '01:04:43', '01:07:03'];

  const penaltyTime = ['01:20', '00:49', '00:58', '01:37', '01:46'];

  function generationParticipants() {
    let arrParticipants = [];
    for (let i = 1; i < 1001; i++) {
      let randName = Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1));
      let randLastName = Math.round(0 - 0.5 + Math.random() * (8 - 0 + 1));
      let randFirstName = Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1));
      let randMaxSpeed = Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1));
      let randTime = Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1));
      let randPenaltyTime = Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1));

      arrParticipants.push({
        id: i,
        fullName: `${lastName[randLastName]} ${name[randName]} ${firstName[randFirstName]}`,
        maxSpeed: maxSpeed[randMaxSpeed],
        time: time[randTime],
        penaltyTime: penaltyTime[randPenaltyTime],
      });
    }
    return arrParticipants;
  }
  return generationParticipants();
}

export default generation;
