export const HOUR = 'HOUR';
export const SECOND = 'SECOND';
export const ADVANCE = 'ADVANCE';
export const RECALL = 'RECALL';

export const clock = (state = new Date(), {type, payload = 1} = {type: ''}) => {
  const date = new Date(state.getTime());

  switch (type) {
    case HOUR:
      date.setHours(date.getHours() + payload);
      return date;
    case SECOND:
      date.setSeconds(date.getSeconds() + payload);
      return date;
    default:
      return state;
  }

};

const defaultPeople = [
  {name: 'Sarah', time: clock()},
  {name: 'James', time: clock()},
  {name: 'Peter', time: clock()},
  {name: 'Saul', time: clock()}
];
export const people = (state = defaultPeople, {type, payload}) => {
  switch (type) {
    case ADVANCE:
      return state.map((person) => {
        if(payload === person) {
          return Object.assign(
            {},
             person,
            {time: clock(person.time, {type: HOUR, payload: 5})}
          );
        }
        return person;
      });
    case RECALL:
      return state.map(
        (person) =>
          Object.assign({}, person, {time: payload})
        );
    default:
      return state;
  }
};
