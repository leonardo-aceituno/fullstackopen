const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const partes = parts.map((value, index) => (
    <p key={index}>
      {value.name} {value.exercises}
    </p>
  ));

  const totalExercises = () =>
    parts.reduce((accumulator, value) => {
      return accumulator + value.exercises;
    }, 0);

  return (
    <>
      <h1>{course}</h1>
      <div>{partes}</div>
      <p>Number of exercises: {totalExercises()}</p>
    </>
  );
};

export default App;
