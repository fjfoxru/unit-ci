export default function life(persons) {
    return persons.sort((prev, next) => next.health - prev.health);
}