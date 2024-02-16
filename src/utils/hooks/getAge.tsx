function getAge(years: number) {
	const dates = new Date();
	return dates.getFullYear() - years;
}
export default getAge;
